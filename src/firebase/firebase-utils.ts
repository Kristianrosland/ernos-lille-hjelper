export const getFirebaseError = (error: { code: string }) => {
    switch (error.code) {
        case 'auth/wrong-password':
            return 'Feil passord';
        case 'auth/user-not-found':
            return 'Brukeren finnes ikke';
        case 'auth/invalid-email':
            return 'Ugyldig epostadresse';
        case 'auth/weak-password':
            return 'For svakt passord!';
        default:
            console.error(error.code);
            return 'Oops.. Noe gikk galt!';
    }
};

export const config = {
    apiKey: 'AIzaSyAW_PdA6o5ygKubwsxaQfJ22dgWE5fA41U',
    authDomain: 'cubeguru-79b7d.firebaseapp.com',
    databaseURL: 'https://cubeguru-79b7d.firebaseio.com',
    projectId: 'cubeguru-79b7d',
    storageBucket: 'cubeguru-79b7d.appspot.com',
    messagingSenderId: '1042814909264',
    appId: '1:1042814909264:web:e79fa88d14f9f4669c4a55',
    measurementId: 'G-Z2GMHWJ2NG',
};

export const defaultAuthState = {
    user: null,
    isLoading: false,
    signIn: async () => null,
    signUp: async () => null,
    signOut: async () => null,
};

export const defaultDataState = {
    sessionSolves: [],
    stored: {
        best: undefined,
        lastFive: [],
    },

    addNewSolve: () => {},
    removeStoredSolve: () => {},
};
