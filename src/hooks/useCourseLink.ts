import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export function useCourseLink(id: string) {
    const [url, setUrl] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLink() {
            try {
                const ref = doc(db, "courseLinks", id);
                const snap = await getDoc(ref);

                if (snap.exists()) {
                    setUrl(snap.data().url);
                }
            } catch (error) {
                console.error("Erro ao buscar link:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchLink();
    }, [id]);

    return { url, loading };
}
