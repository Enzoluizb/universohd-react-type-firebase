import { db, functions } from "./firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { Timestamp } from "firebase/firestore";

export interface User {
    uid: string;
    email: string;
    name: string;
    role: string;
    createdAt?: Timestamp;
}

export const subscribeToUsers = (callback: (users: User[]) => void) => {
    return onSnapshot(collection(db, "users"), (snapshot) => {
        const usersData: User[] = snapshot.docs.map((docSnap) => ({
            uid: docSnap.id,
            ...(docSnap.data() as Omit<User, "uid">),
        }));
        callback(usersData);
    });
};

export const updateUserRole = async (uid: string, role: string) => {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { role });
};

export const updateUserInfo = async (uid: string, name: string, email: string) => {
    const updateUser = httpsCallable(functions, "updateUser");
    await updateUser({ uid, name, email });
};

export const deleteUserById = async (uid: string) => {
    const deleteUser = httpsCallable(functions, "deleteUser");
    await deleteUser({ uid });
};

export const createNewUser = async (email: string, password: string, name: string) => {
    const createUser = httpsCallable(functions, "createUser");
    await createUser({ email, password, name });
};