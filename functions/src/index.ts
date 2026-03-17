import { setGlobalOptions } from "firebase-functions/v2";
import { onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

export const createUser = onCall(async (request) => {
    const { email, password, name, role } = request.data;

    if (!email || !password || !name) {
        throw new Error("Email, senha e nome são obrigatórios");
    }

    const userRecord = await admin.auth().createUser({
        email,
        password,
        displayName: name,
    });

    await admin.firestore().collection("users").doc(userRecord.uid).set({
        uid: userRecord.uid,
        email: userRecord.email,
        name,
        role: role,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { uid: userRecord.uid, email: userRecord.email, name };
});

export const updateUser = onCall(async (request) => {
    const { uid, name, email } = request.data;

    if (!uid) throw new Error("UID é obrigatório");

    // Atualiza no Auth
    await admin.auth().updateUser(uid, {
        ...(email && { email }),
        ...(name && { displayName: name }),
    });

    // Atualiza no Firestore
    await admin.firestore().collection("users").doc(uid).update({
        ...(email && { email }),
        ...(name && { name }),
    });

    return { message: "Usuário atualizado com sucesso" };
});

export const deleteUser = onCall(async (request) => {
    const { uid } = request.data;

    if (!uid) throw new Error("UID é obrigatório");

    await admin.auth().deleteUser(uid);
    await admin.firestore().collection("users").doc(uid).delete();

    return { message: "Usuário deletado com sucesso" };
});