import { Solve } from '../../types/solve-types';

export interface DataState {
    sessionSolves: Solve[];
    stored: StoredData;
    activeTags: string[];
}

export interface Friend {
    username: string | undefined;
    bestSolveTime: number | undefined;
}

export interface StoredData {
    best: Solve | undefined;
    nLastSolves?: Solve[];
}

export interface DataStateModifiers {
    addNewSolve: (solve: Solve) => Promise<void>;
    removeStoredSolve: (solve: Solve) => Promise<void>;
    getLastNStoredSolves: (n: number) => Promise<Solve[] | null>;
    addActiveTag: (tag: string) => void;
    removeActiveTag: (tag: string) => void;
}

export interface AuthState {
    user: (firebase.User & LoggedInUser) | null;
    isLoading: boolean;
    featureFlags?: string[];
}

export interface LoggedInUser {
    username: string | undefined;
    friends: Friend[];
}

export interface AuthStateModifiers {
    signIn: (email: string, password: string) => Promise<string | null>;
    signUp: (email: string, password: string, username?: string) => Promise<string | null>;
    signOut: () => void;
}
