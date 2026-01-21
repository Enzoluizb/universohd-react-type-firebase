import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import type { Product } from "../../types/Product";

const productsRef = ref(database, "products");

export function subscribeProducts(
    callback: (products: Product[]) => void
) {
    return onValue(productsRef, (snapshot) => {
        if (!snapshot.exists()) {
            callback([]);
            return;
        }

        const data = snapshot.val();

        const parsed = Object.entries(data).map(([id, value]) => ({
            id,
            ...(value as Omit<Product, "id">),
        }));

        callback(parsed);
    });
}
