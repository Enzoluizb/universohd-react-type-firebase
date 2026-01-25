import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "react-realtime-crud-776f4.firebaseapp.com",
    databaseURL: "https://react-realtime-crud-776f4-default-rtdb.firebaseio.com/",
    projectId: "react-realtime-crud-776f4",
    storageBucket: "react-realtime-crud-776f4.firebasestorage.app",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
