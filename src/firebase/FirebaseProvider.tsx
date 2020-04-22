import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Solve } from '../types/solve-types';
import { config, defaultAuthState, defaultDataState, getFirebaseError } from './firebase-utils';
import { AuthState, AuthStateModifiers, DataState, DataStateModifiers } from './types';
import { getUsername, setUsername, usernameExists } from './userdata-operations';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let allSolvesCollection: firestore.CollectionReference | undefined;

export const AuthContext = createContext<AuthState & AuthStateModifiers>(defaultAuthState);
export const DataContext = createContext<DataState & DataStateModifiers>(defaultDataState);

const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>({ user: null, isLoading: true });
    const [dataState, setDataState] = useState<DataState>({
        sessionSolves: [],
        stored: { best: undefined },
    });

    const updateBest = (bestSolve: Solve | undefined) =>
        setDataState(prev => ({ ...prev, stored: { ...prev.stored, best: bestSolve } }));

    const addNewSolve = async (solve: Solve) => {
        setDataState(prev => ({ ...prev, sessionSolves: [solve, ...prev.sessionSolves] }));

        if (authState.user && allSolvesCollection) {
            const doc = allSolvesCollection.doc();
            await doc.set(solve);

            const solveWithId = { ...solve, id: doc.id };

            if (dataState.stored.best === undefined || dataState.stored.best.time > solve.time) {
                updateBest(solveWithId);
            }
        }
    };

    const removeStoredSolve = async (solveToRemove: Solve) => {
        setDataState({
            ...dataState,
            sessionSolves: dataState.sessionSolves.filter(solve => solve.timestamp !== solveToRemove.timestamp),
        });

        if (authState.user && allSolvesCollection) {
            await allSolvesCollection
                .where('timestamp', '==', solveToRemove.timestamp)
                .get()
                .then(snapshot => snapshot.docs.forEach(doc => doc.ref.delete()));

            if (dataState.stored.best?.timestamp === solveToRemove.timestamp) {
                allSolvesCollection
                    .orderBy('time', 'asc')
                    .limit(1)
                    .get()
                    .then(snapshot => snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    .then(res => updateBest(res.length === 0 ? undefined : (res[0] as Solve)));
            }
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await auth?.signInWithEmailAndPassword(email, password);
            return null;
        } catch (err) {
            return getFirebaseError(err);
        }
    };

    const signOut = () => {
        auth?.signOut();
        setDataState(prev => ({ ...prev, stored: defaultDataState.stored }));
    };

    const onUserSignedIn = useCallback(async (user: firebase.User) => {
        allSolvesCollection = firebase
            .firestore()
            .collection('solves')
            .doc(user.uid)
            .collection('all_solves');

        allSolvesCollection
            .orderBy('time', 'asc')
            .limit(1)
            .get()
            .then(snapshot => snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            .then(res => updateBest(res.length === 0 ? undefined : (res[0] as Solve)));

        const username = await getUsername(user.uid);
        setAuthState(prev => ({ ...prev, user: { ...user, username } }));
    }, []);

    const signUp = async (email: string, password: string, username?: string) => {
        try {
            const existing = await usernameExists(username!);

            if (existing) {
                return 'Dette brukernavnet er dessverre opptatt';
            }

            const res = await auth?.createUserWithEmailAndPassword(email, password);

            if (!res) {
                return 'Noe gikk galt med opprettelsen av din konto';
            }

            if (res.user?.uid) {
                setUsername({ username: username!, userId: res.user!.uid });
            }

            return null;
        } catch (err) {
            return getFirebaseError(err);
        }
    };

    useEffect(() => {
        if (!auth) {
            auth = firebase.auth();
            auth.onAuthStateChanged(user => {
                setAuthState({ user, isLoading: false });

                if (user === null) {
                    allSolvesCollection = undefined;
                } else {
                    onUserSignedIn(user);
                }
            });
        }
    }, [onUserSignedIn]);

    return (
        <AuthContext.Provider value={{ ...authState, signIn, signUp, signOut }}>
            <DataContext.Provider value={{ ...dataState, addNewSolve, removeStoredSolve }}>
                {children}
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;