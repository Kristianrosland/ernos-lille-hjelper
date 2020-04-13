import React, { useEffect, useState } from 'react';

import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import config from './firebase.config';
import Timer from './timer/Timer';
import { Solve } from './types/solve-types';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;
let solveDbCollection: firestore.CollectionReference | undefined;

export const AuthContext = React.createContext<AuthState | null>(null);
export const DataContext = React.createContext<(DataState & DataStateModifiers) | null>(null);

interface DataState {
    sessionSolves: Solve[];
    storedSolves: Solve[];
}

interface DataStateModifiers {
    addNewSolve: (solve: Solve) => void;
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
    };

    useEffect(() => {
        if (!auth) {
            auth = firebase.auth();

            firebase.auth().onAuthStateChanged(user => {
                setAuthState({ user, isLoading: false });

                if (user !== null) {
                    solveDbCollection = firebase
                        .firestore()
                        .collection('solves')
                        .doc(user.uid)
                        .collection('all_solves');

                    solveDbCollection.onSnapshot(snapshot => {
                        setDataState(prev => ({
                            ...prev,
                            storedSolves: snapshot.docs.map(doc => doc.data() as Solve),
                        }));
                    });
                }
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={authState}>
            <DataContext.Provider value={{ ...dataState, addNewSolve }}>
                <HashRouter>
                    <Route exact={true} path="/" component={Timer} />
                    <Route path="/algorithms" component={Algorithms} />
                </HashRouter>
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
