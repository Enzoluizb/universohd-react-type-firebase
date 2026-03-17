import { db, functions } from "./firebase";
import { database } from "./firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { Timestamp } from "firebase/firestore";
import { ref, query, orderByChild, equalTo, onValue, update } from "firebase/database";

export interface User {
    uid: string;
    email: string;
    name: string;
    role: "admin" | "especialista" | "mastermind" | "embaixadora";
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

const updateProductsRole = async (
    uid: string,
    role: "admin" | "especialista" | "mastermind" | "embaixadora"
) => {
    // referência para a coleção "products" no Realtime Database
    const productsRef = ref(database, "products");

    // cria uma query buscando apenas produtos onde ownerId === uid
    const userProductsQuery = query(productsRef, orderByChild("ownerId"), equalTo(uid));

    return new Promise<void>((resolve) => {
        // busca os produtos UMA VEZ só (onlyOnce: true), sem ficar escutando
        onValue(userProductsQuery, async (snapshot) => {

            // se a usuária não tem nenhum produto, encerra
            if (!snapshot.exists()) {
                resolve();
                return;
            }

            // monta um objeto de atualizações em lote
            // ex: { "products/abc123/ownerRole": "mastermind", "products/xyz456/ownerRole": "mastermind" }
            const updates: Record<string, string> = {};
            Object.keys(snapshot.val()).forEach((productId) => {
                updates[`products/${productId}/ownerRole`] = role;
            });

            // envia todas as atualizações de uma vez para o banco (uma única requisição)
            await update(ref(database), updates);
            resolve();
        }, { onlyOnce: true });
    });
};

export const updateUserRole = async (
    uid: string,
    role: "admin" | "especialista" | "mastermind" | "embaixadora"
) => {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, { role });
    await updateProductsRole(uid, role);
};

export const updateUserInfo = async (uid: string, name: string, email: string) => {
    const updateUser = httpsCallable(functions, "updateUser");
    await updateUser({ uid, name, email });
};

export const deleteUserById = async (uid: string) => {
    const deleteUser = httpsCallable(functions, "deleteUser");
    await deleteUser({ uid });
};

export const createNewUser = async (
    email: string,
    password: string,
    name: string,
    role: "admin" | "especialista" | "mastermind" | "embaixadora"
) => {
    const createUser = httpsCallable(functions, "createUser");

    await createUser({
        email,
        password,
        name,
        role,
    });
};