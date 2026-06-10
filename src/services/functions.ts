import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

export async function createUserByAdmin(email: string, password: string) {
    const createUser = httpsCallable(functions, "createUser");

    const result = await createUser({
        email,
        password,
    });

    return result.data;
}