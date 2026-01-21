import { ref, push, set } from "firebase/database";
import { database } from "../firebase";
import type { Product } from "../../types/Product";

const productsRef = ref(database, "products");

export async function createProduct(product: Product) {
    const newRef = push(productsRef);
    await set(newRef, product);
}
