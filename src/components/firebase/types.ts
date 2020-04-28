import { Solve } from '../../types/solve-types';

export interface DataState {
    sessionSolves: Solve[];
    stored: StoredData;
}

export interface StoredData {
    best: Solve | undefined;
    nLastSolves?: Solve[];
}

export interface DataStateModifiers {
    addNewSolve: (solve: Solve) => Promise<void>;
    removeStoredSolve: (solve: Solve) => Promise<void>;
    getLastNStoredSolves: (n: number) => Promise<Solve[] | null>;
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
