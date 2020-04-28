import firebase, { firestore } from 'firebase/app';
import { Solve } from '../../types/solve-types';
import { Friend, LoggedInUser } from './types';

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

const getPublicUserData = (userId: string) =>
    firebase
        .firestore()
        .collection('public_userdata')
        .doc(userId)
        .get();

export const getUserData = async (userId: string): Promise<LoggedInUser | null> => {
    const doc = await getUserDataCollection(userId);
    const publicDoc = await getPublicUserData(userId);

    const data = doc.data();
    const publicData = publicDoc.data();
    const username = publicData && 'username' in publicData ? publicData.username : undefined;

    if (!data) {
        return {
            username,
            friends: [],
        };
    }

    const friendIds: string[] = 'friends' in data ? data.friends : [];
    const friends = await Promise.all(
        friendIds.map(async id => {
            try {
                const publicFriendData = await getPublicUserData(id);

                const friendUserName =
                    publicFriendData && publicFriendData.data() && 'username' in publicFriendData.data()!
                        ? publicFriendData.data()!.username
                        : undefined;

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
            } catch (err) {
                console.error('Error fetching friend with id', id);
                return null;
            }
        }),
    );
    return {
        username,
        friends: friends.filter(f => f !== null).map(f => f as Friend),
    };
};

export const setUsername = (args: { userId: string; username: string }) => {
    firebase
        .firestore()
        .collection('public_userdata')
        .doc(args.userId)
        .set({ username: args.username });
};

export const usernameExists = async (username: string): Promise<boolean> => {
    const res = await firebase
        .firestore()
        .collection('public_userdata')
        .where('username', '==', username)
        .get();

    return res.docs.length > 0;
};
