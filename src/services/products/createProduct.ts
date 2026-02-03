import { ref, push, set } from "firebase/database";
import { database } from "../firebase";
import type { ProductInput } from "../../types/ProductInput";

const productsRef = ref(database, "products");

export async function createProduct(input: ProductInput) {
    const newRef = push(productsRef);
    await set(newRef, input);
}
