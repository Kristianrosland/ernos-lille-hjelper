import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import CubeTimer from './cube-timer/CubeTimer';
import { config, getFirebaseError, solveConverter } from './firebase-utils';
import Login from './login/Login';
import Register from './register/Register';
import { Solve } from './types/solve-types';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let solveDbCollection: firestore.CollectionReference | undefined;

export const AuthContext = React.createContext<AuthState & AuthStateModifiers>({
    user: null,
    isLoading: false,
    signIn: async () => null,
    signUp: async () => null,
});
export const DataContext = React.createContext<DataState & DataStateModifiers>({
    sessionSolves: [],
    storedSolves: [],
    addNewSolve: () => {},
    removeStoredSolve: () => {},
});

interface DataState {
    sessionSolves: Solve[];
    storedSolves: (Solve & { id: string })[];
}

interface DataStateModifiers {
    addNewSolve: (solve: Solve) => void;
    removeStoredSolve: (id: string) => void;
}

interface AuthState {
    user: firebase.User | null;
    isLoading: boolean;
}

interface AuthStateModifiers {
    signIn: (email: string, password: string) => Promise<string | null>;
    signUp: (email: string, password: string) => Promise<string | null>;
}

const App = () => {
    const [authState, setAuthState] = useState<AuthState>({ user: null, isLoading: true });
    const [dataState, setDataState] = useState<DataState>({
        sessionSolves: [],
        storedSolves: [],
    });

    const addNewSolve = async (solve: Solve) => {
        setDataState(prev => ({ ...prev, sessionSolves: [solve, ...prev.sessionSolves] }));

        if (authState.user) {
            const doc = solveDbCollection!.doc();
            await doc.set(solve);
            setDataState(prev => ({ ...prev, storedSolves: [{ ...solve, id: doc.id }, ...prev.storedSolves] }));
        }
    };

    const removeStoredSolve = (id: string) => {
        if (authState.user) {
            solveDbCollection?.doc(id).delete();
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

    const signUp = async (email: string, password: string) => {
        try {
            await auth?.createUserWithEmailAndPassword(email, password);
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
                    solveDbCollection = undefined;
                } else {
                    solveDbCollection = firebase
                        .firestore()
                        .collection('solves')
                        .doc(user.uid)
                        .withConverter(solveConverter)
                        .collection('all_solves');

                    solveDbCollection
                        .get()
                        .then(snapshot => {
                            setDataState(prev => ({
                                ...prev,
                                storedSolves: snapshot.docs.map(doc => ({
                                    ...(doc.data() as Solve),
                                    id: doc.id,
                                })),
                            }));
                        })
                        .catch(err => {
                            if (err.message.toLowerCase().includes('quota exceeded')) {
                                console.error('Firestore kvote exceeded');
                            } else {
                                throw err;
                            }
                        });
                }
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...authState, signIn, signUp }}>
            <DataContext.Provider value={{ ...dataState, addNewSolve, removeStoredSolve }}>
                <HashRouter>
                    <Route exact={true} path="/" component={CubeTimer} />
                    <Route path="/algorithms" component={Algorithms} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </HashRouter>
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
