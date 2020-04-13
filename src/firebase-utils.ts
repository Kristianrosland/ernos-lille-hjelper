import { Solve } from './types/solve-types';

export const solveConverter = {
    toFirestore: (solve: Solve) => ({
        time: solve.time,
        timestamp: solve.timestamp,
        scramble: solve.scramble,
    }),
    fromFirestore: (snapshot: any, options: any): Solve => {
        const data = snapshot.data(options);
        return { time: data.time, timestamp: data.timestamp, scramble: data.scramble };
    },
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
