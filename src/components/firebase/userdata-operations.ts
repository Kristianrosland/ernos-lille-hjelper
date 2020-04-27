import firebase, { firestore } from 'firebase/app';
import { Solve } from '../../types/solve-types';
import { LoggedInUser } from './types';

export const getUserSolvesCollection = (userId: string): firestore.CollectionReference =>
    firebase
        .firestore()
        .collection('solves')
        .doc(userId)
        .collection('all_solves');

const getUserDataCollection = (userId: string) =>
    firebase
        .firestore()
        .collection('userdata')
        .doc(userId)
        .get();

export const getUserData = async (userId: string): Promise<LoggedInUser | null> => {
    const doc = await getUserDataCollection(userId);

    const data = doc.data();

    if (!data) {
        return {
            username: undefined,
            friends: [],
        };
    }

    const username = 'username' in data ? data.username : undefined;
    const friendIds: string[] = 'friends' in data ? data.friends : [];

    const friends = await Promise.all(
        friendIds.map(async id => {
            const friendUserCollection = await getUserDataCollection(id);
            const friendData = friendUserCollection.data();
            const friendUserName = friendData && 'username' in friendData ? friendData.username : undefined;

            const res = await getUserSolvesCollection(id)
                .orderBy('time', 'asc')
                .limit(1)
                .get();

            const solves = res.docs.map(solveDoc => ({ ...solveDoc.data(), id: solveDoc.id }));
            const bestSolve = solves.length === 0 ? undefined : (solves[0] as Solve);

            return {
                username: friendUserName,
                bestSolveTime: bestSolve ? bestSolve.time : undefined,
            };
        }),
    );

    return {
        username,
        friends,
    };
};

export const setUsername = (args: { userId: string; username: string }) => {
    firebase
        .firestore()
        .collection('userdata')
        .doc(args.userId)
        .set({ username: args.username });
};

export const usernameExists = async (username: string): Promise<boolean> => {
    const res = await firebase
        .firestore()
        .collection('userdata')
        .where('username', '==', username)
        .get();

    return res.docs.length > 0;
};
