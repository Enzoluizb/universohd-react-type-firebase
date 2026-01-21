import { ref, push, set } from "firebase/database";
import { database } from "../firebase";
import type { ProductInput } from "../../types/ProductInput";
import type { Product } from "../../types/Product";

const productsRef = ref(database, "products");

export async function createProduct(input: ProductInput) {
    const product: Product = {
        title: input.title,
        description: "Produto teste",
        whatsapp: "5547999999999",
        active: true,
        createdAt: Date.now(),
        ownerId: "user_test_1",
    };

    const newRef = push(productsRef);
    await set(newRef, product);
}
