import { ref, update } from "firebase/database";
import { database } from "../firebase";
import type { Product } from "../../types/Product";

export function toggleProductActive(id: string, active: boolean) {
    return update(ref(database, `products/${id}`), { active });
}

export function editProduct(
    id: string,
    data: Partial<Product>
) {
    return update(ref(database, `products/${id}`), data);
}
