import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { Solve } from '../../types/solve-types';
import { config, defaultAuthState, defaultDataState, getFirebaseError } from './firebase-utils';
import { AuthState, AuthStateModifiers, DataState, DataStateModifiers } from './types';
import { getUserData, getUserSolvesCollection, setUsername, usernameExists } from './userdata-operations';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let allSolvesCollection: firestore.CollectionReference | undefined;

export const AuthContext = createContext<AuthState & AuthStateModifiers>(defaultAuthState);
export const DataContext = createContext<DataState & DataStateModifiers>(defaultDataState);

const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>({ user: null, isLoading: true });
    const [dataState, setDataState] = useState<DataState>({
        sessionSolves: [],
        stored: { best: undefined, nLastSolves: undefined },
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
            console.log('Skal slette');
            await allSolvesCollection
                .where('timestamp', '==', solveToRemove.timestamp)
                .get()
                .then(snapshot => snapshot.docs.forEach(doc => doc.ref.delete()));
        } else {
            console.log('SLetter ikke');
        }
    };

    const getLastNStoredSolves = async (n: number): Promise<Solve[] | null> => {
        if (!authState.user?.uid) {
            return null;
        }
        if (dataState.stored.nLastSolves) {
            return dataState.stored.nLastSolves;
        }

        const res = await firebase
            .firestore()
            .collection('solves')
            .doc(authState.user!.uid)
            .collection('all_solves')
            .orderBy('timestamp', 'desc')
            .limit(n)
            .get();

        const solves = res.docs.map(doc => doc.data() as Solve);
        setDataState(prev => ({ ...prev, stored: { ...prev.stored, nLastSolves: solves } }));

        return solves;
    };

    const signIn = async (email: string, password: string) => {
        try {
            await auth?.signInWithEmailAndPassword(email, password);
            return null;
        } catch (err) {
            return getFirebaseError(err);
        }
    };

    const signOut = async () => {
        auth?.signOut();
        setDataState(prev => ({ ...prev, stored: defaultDataState.stored }));
    };

    const onUserSignedIn = useCallback(async (user: firebase.User) => {
        allSolvesCollection = getUserSolvesCollection(user.uid);

        await allSolvesCollection
            .orderBy('timestamp', 'desc')
            .limit(5)
            .get()
            .then(res =>
                setDataState(prev => ({
                    ...prev,
                    sessionSolves: res.docs.map(d => d.data() as Solve),
                })),
            );

        getUserSolvesCollection(user.uid)
            .orderBy('time', 'asc')
            .limit(1)
            .onSnapshot(snapshot => {
                const solves = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                updateBest(solves.length === 0 ? undefined : (solves[0] as Solve));
            });

        const userData = await getUserData(user.uid);

        setAuthState(prev => ({
            ...prev,
            isLoading: false,
            user: userData ? { ...user, ...userData } : { ...user, username: undefined, friends: [] },
        }));
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
                if (user === null) {
                    allSolvesCollection = undefined;
                    setAuthState({ user: null, isLoading: false });
                } else {
                    onUserSignedIn(user);
                }
            });
        }
    }, [onUserSignedIn]);

    return (
        <AuthContext.Provider value={{ ...authState, signIn, signUp, signOut }}>
            <DataContext.Provider value={{ ...dataState, addNewSolve, removeStoredSolve, getLastNStoredSolves }}>
                {children}
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
