import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAKtoEOFuhnPW4qBijTsoSimyAhdJjFnCg",
    authDomain: "react-realtime-crud-776f4.firebaseapp.com",
    databaseURL: "https://react-realtime-crud-776f4-default-rtdb.firebaseio.com",
    projectId: "react-realtime-crud-776f4",
    storageBucket: "react-realtime-crud-776f4.firebasestorage.app",
    messagingSenderId: "174007772022",
    appId: "1:174007772022:web:4337f5b14cd163670e5057",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
