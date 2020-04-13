import React, { useEffect, useState } from 'react';

import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import CubeTimer from './cube-timer/CubeTimer';
import { config, solveConverter } from './firebase-utils';
import { Solve } from './types/solve-types';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let solveDbCollection: firestore.CollectionReference | undefined;

export const AuthContext = React.createContext<AuthState | null>(null);
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

const App = () => {
    const [authState, setAuthState] = useState<AuthState>({ user: null, isLoading: true });
    const [dataState, setDataState] = useState<DataState>({
        sessionSolves: [],
        storedSolves: [],
    });

    const addNewSolve = (solve: Solve) => {
        setDataState(prev => ({ ...prev, sessionSolves: [solve, ...prev.sessionSolves] }));

        if (authState.user) {
            solveDbCollection?.doc().set(solve);
        }
    };

    const removeStoredSolve = (id: string) => {
        if (authState.user) {
            solveDbCollection?.doc(id).delete();
        }
    };

    useEffect(() => {
        if (!auth) {
            auth = firebase.auth();

            auth.onAuthStateChanged(user => {
                setAuthState({ user, isLoading: false });

                if (user === null) {
                    solveDbCollection = undefined;
                    auth?.signInWithEmailAndPassword('admin@cubeguru.no', 'vilde og nora');
                } else {
                    solveDbCollection = firebase
                        .firestore()
                        .collection('solves')
                        .doc(user.uid)
                        .withConverter(solveConverter)
                        .collection('all_solves');

                    solveDbCollection.onSnapshot(snapshot => {
                        setDataState(prev => ({
                            ...prev,
                            storedSolves: snapshot.docs.map(doc => ({ ...(doc.data() as Solve), id: doc.id })),
                        }));
                    });
                }
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={authState}>
            <DataContext.Provider value={{ ...dataState, addNewSolve, removeStoredSolve }}>
                <HashRouter>
                    <Route exact={true} path="/" component={CubeTimer} />
                    <Route path="/algorithms" component={Algorithms} />
                </HashRouter>
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
