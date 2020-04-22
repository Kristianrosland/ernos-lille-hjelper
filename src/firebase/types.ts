import { Solve } from '../types/solve-types';

export interface DataState {
    sessionSolves: Solve[];
    stored: StoredData;
}

export interface StoredData {
    best: Solve | undefined;
    lastFive: Solve[];
}

export interface DataStateModifiers {
    addNewSolve: (solve: Solve) => void;
    removeStoredSolve: (solve: Solve) => void;
}

export interface AuthState {
    user: (firebase.User & { username?: string }) | null;
    isLoading: boolean;
}

export interface AuthStateModifiers {
    signIn: (email: string, password: string) => Promise<string | null>;
    signUp: (email: string, password: string, username?: string) => Promise<string | null>;
    signOut: () => void;
}
