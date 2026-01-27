import type { AuthUser } from "../contexts/AuthContext";
import type { Product } from "../types/Product";

export function canEditProduct(user: AuthUser | null, product: Product) {
    if (!user) return false;
    if (user.role === "admin") return true; // admin pode tudo
    return product.ownerId === user.uid;   // user só pode editar o que criou
}

export function canDeleteProduct(user: AuthUser | null, product: Product) {
    return canEditProduct(user, product);
}

export function canToggleActive(user: AuthUser | null, product: Product) {
    return canEditProduct(user, product);
}
