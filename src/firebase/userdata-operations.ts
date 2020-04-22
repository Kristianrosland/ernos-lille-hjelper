import firebase from 'firebase';

export const getUsername = async (userId: string): Promise<string | undefined> => {
    const doc = await firebase
        .firestore()
        .collection('userdata')
        .doc(userId)
        .get();

    const data = doc.data();

    if (data && 'username' in data) {
        return data.username;
    } else {
        return undefined;
    }
};

export const setUsername = (userId: string, username: string) => {
    firebase
        .firestore()
        .collection('userdata')
        .doc(userId)
        .set({ username });
};

export const usernameExists = async (username: string): Promise<boolean> => {
    const res = await firebase
        .firestore()
        .collection('userdata')
        .where('username', '==', username)
        .get();

    return res.docs.length > 0;
};
