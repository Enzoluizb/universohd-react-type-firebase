import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export type CourseLink = {
    id: string;
    title: string;
    url: string;
};

export async function getAllCourseLinks(): Promise<CourseLink[]> {
    const snapshot = await getDocs(collection(db, "courseLinks"));

    return snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        title: docSnap.data().title,
        url: docSnap.data().url,
    }));
}

export async function updateCourseLink(id: string, url: string) {
    const ref = doc(db, "courseLinks", id);
    await updateDoc(ref, { url });
}
