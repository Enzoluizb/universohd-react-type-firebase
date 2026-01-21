import { useEffect, useState } from "react";
import {
    createProduct,
    deleteProduct,
    toggleProductActive,
    subscribeProducts,
} from "../services/products";

import type { Product } from "../types/Product";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [title, setTitle] = useState("");

    async function create() {
        if (!title.trim()) return;

        await createProduct({ title });
        setTitle("");
    }

    async function remove(id?: string) {
        if (!id) return;
        await deleteProduct(id);
    }

    async function toggleActive(product: Product) {
        if (!product.id) return;
        await toggleProductActive(product.id, !product.active);
    }

    useEffect(() => {
        const unsubscribe = subscribeProducts(setProducts);
        return () => unsubscribe();
    }, []);

    return {
        products,
        title,
        setTitle,
        create,
        remove,
        toggleActive,
    };
}
