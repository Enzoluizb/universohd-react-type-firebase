import { ref, set } from "firebase/database";
import { database } from "../firebase";
import type { ProductInput } from "../../types/ProductInput";

export async function createProduct(input: ProductInput, productId: string) {
    const productRef = ref(database, `products/${productId}`);
    await set(productRef, input);
}