import { ref, remove } from "firebase/database";
import { database } from "../firebase";

export function deleteProduct(id: string) {
    return remove(ref(database, `products/${id}`));
}
