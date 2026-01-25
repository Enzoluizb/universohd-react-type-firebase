import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./storage";

export async function uploadImage(file: File) {
    const fileRef = ref(
        storage,
        `products/${Date.now()}-${file.name}`
    );

    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    return url;
}
