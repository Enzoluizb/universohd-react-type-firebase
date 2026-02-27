import { setGlobalOptions } from "firebase-functions/v2";
import { onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();

setGlobalOptions({ maxInstances: 10 });

export const createUser = onCall(async (request) => {
    const { email, password } = request.data;

    if (!email || !password) {
        throw new Error("Email e senha são obrigatórios");
    }

    const userRecord = await admin.auth().createUser({
        email,
        password,
    });

    await admin.firestore().collection("users").doc(userRecord.uid).set({
        uid: userRecord.uid,
        email: userRecord.email,
        role: "user", // depois podemos deixar dinâmico
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {
        uid: userRecord.uid,
        email: userRecord.email,
    };
});