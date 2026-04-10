import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDe0Si3i-YrT_gvQPWZ59-PNK6rqKNBIaM",
    authDomain: "universohd2026-943a3.firebaseapp.com",
    projectId: "universohd2026-943a3",
    storageBucket: "universohd2026-943a3.firebasestorage.app",
    messagingSenderId: "22017449820",
    appId: "1:22017449820:web:0363c492a8d16c0ce62b99",
    databaseURL: "https://universohd2026-943a3-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

export const functions = getFunctions(app, "us-central1");