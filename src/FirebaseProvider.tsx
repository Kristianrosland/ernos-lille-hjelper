import React, { createContext, ReactNode, useEffect, useState } from 'react';

import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { config, getFirebaseError } from './firebase-utils';
import { Solve } from './types/solve-types';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let allSolvesCollection: firestore.CollectionReference | undefined;
let solvesCollection: firestore.DocumentReference | undefined;

export const AuthContext = createContext<AuthState & AuthStateModifiers>({
    user: null,
    isLoading: false,
    signIn: async () => null,
    signUp: async () => null,
    signOut: async () => null,
});
export const DataContext = createContext<DataState & DataStateModifiers>({
    sessionSolves: [],
    stored: {
        best: undefined,
    },

    addNewSolve: () => {},
    removeStoredSolve: () => {},
});

interface DataState {
    sessionSolves: Solve[];
    stored: StoredData;
}

interface StoredData {
    best: (Solve & { id: string }) | undefined;
}

interface DataStateModifiers {
    addNewSolve: (solve: Solve) => void;
    removeStoredSolve: (id: string) => void;
}

interface AuthState {
    user: (firebase.User & { username?: string }) | null;
    isLoading: boolean;
}

interface AuthStateModifiers {
    signIn: (email: string, password: string) => Promise<string | null>;
    signUp: (email: string, password: string, username?: string) => Promise<string | null>;
    signOut: () => void;
}

const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>({ user: null, isLoading: true });
    const [dataState, setDataState] = useState<DataState>({
        sessionSolves: [],
        stored: { best: undefined },
    });

    const updateBest = async (b?: Solve & { id: string }) =>
        setDataState(prev => ({ ...prev, stored: { ...prev.stored, best: b } }));

    const storeNewBest = (best?: Solve & { id: string }) => {
        if (authState.user) {
            firebase
                .firestore()
                .collection('solves')
                .doc(authState.user.uid)
                .set({ best: best ?? firebase.firestore.FieldValue.delete() }, { merge: true });
        }
    };

    const addNewSolve = async (solve: Solve) => {
        setDataState(prev => ({ ...prev, sessionSolves: [solve, ...prev.sessionSolves] }));

        if (authState.user && allSolvesCollection) {
            const doc = allSolvesCollection.doc();
            await doc.set(solve);

            const solveWithId = { ...solve, id: doc.id };

            if (dataState.stored.best === undefined || dataState.stored.best.time > solve.time) {
                updateBest(solveWithId);
                storeNewBest(solveWithId);
            }
        }
    };

    const removeStoredSolve = async (id: string) => {
        if (authState.user) {
            await allSolvesCollection?.doc(id).delete();

            if (dataState.stored.best?.id === id) {
                allSolvesCollection
                    ?.orderBy('time', 'asc')
                    .limit(1)
                    .get()
                    .then(snapshot => snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    .then(res => {
                        if (res.length === 1) {
                            const newBest = res[0] as Solve & { id: string };

                            updateBest(newBest);
                            storeNewBest(newBest);
                        } else {
                            storeNewBest(undefined);
                            updateBest(undefined);
                        }
                    });
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
        setDataState(prev => ({ ...prev, stored: { best: undefined } }));
    };

    const onUserSignedIn = (user: firebase.User) => {
        solvesCollection = firebase
            .firestore()
            .collection('solves')
            .doc(user.uid);

        allSolvesCollection = solvesCollection.collection('all_solves');

        solvesCollection
            .get()
            .then(doc => doc.data())
            .then(doc => {
                if (doc && doc.best) {
                    updateBest(doc.best as Solve & { id: string });
                }
            });

        firebase
            .firestore()
            .collection('userdata')
            .doc(user.uid)
            .get()
            .then(doc => {
                const data = doc.data();
                if (data && 'username' in data) {
                    const updatedUser = { ...user, username: data.username };
                    setAuthState(prev => ({ ...prev, user: updatedUser }));
                }
            });
    };

    const signUp = async (email: string, password: string, username?: string) => {
        try {
            const existing =
                (
                    await firebase
                        .firestore()
                        .collection('userdata')
                        .where('username', '==', username)
                        .get()
                ).docs.length > 0;

            if (existing) {
                return 'Dette brukernavnet er dessverre opptatt';
            }

            const res = await auth?.createUserWithEmailAndPassword(email, password);

            if (!res) {
                return 'Noe gikk galt med opprettelsen av din konto';
            }

            if (res.user?.uid) {
                await firebase
                    .firestore()
                    .collection('userdata')
                    .doc(res.user.uid)
                    .set({
                        username,
                    });
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
    }, []);

    return (
        <AuthContext.Provider value={{ ...authState, signIn, signUp, signOut }}>
            <DataContext.Provider value={{ ...dataState, addNewSolve, removeStoredSolve }}>
                {children}
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
