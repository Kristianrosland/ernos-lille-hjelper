import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import CubeTimer from './cube-timer/CubeTimer';
import config from './firebase.config';
import { Solve } from './types/solve-types';

firebase.initializeApp(config);
let auth: firebase.auth.Auth | undefined;

export const AuthContext = React.createContext<AuthState | null>(null);
export const DataContext = React.createContext<DataState & DataStateModifiers>({
    sessionSolves: [],
    addNewSolve: () => {},
});

interface DataState {
    sessionSolves: Solve[];
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
    });

    const addNewSolve = (solve: Solve) => {
        setDataState(prev => ({ ...prev, sessionSolves: [solve, ...prev.sessionSolves] }));
    };

    useEffect(() => {
        if (!auth) {
            auth = firebase.auth();

            firebase.auth().onAuthStateChanged(user => {
                setAuthState({ user, isLoading: false });
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={authState}>
            <DataContext.Provider value={{ ...dataState, addNewSolve }}>
                <HashRouter>
                    <Route exact={true} path="/" component={CubeTimer} />
                    <Route path="/algorithms" component={Algorithms} />
                </HashRouter>
            </DataContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
