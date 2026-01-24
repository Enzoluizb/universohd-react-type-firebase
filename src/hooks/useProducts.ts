import { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  toggleProductActive,
  subscribeProducts,
  editProduct,
} from "../services/products";

import type { Product } from "../types/Product";

type CreateProductPostInput = {
  title: string;
  description: string;
  whatsapp: string;
  image?: File | null;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function createProductPost(data: CreateProductPostInput) {
    await createProduct({
      title: data.title,
      description: data.description,
      whatsapp: data.whatsapp,
      active: true,
      createdAt: Date.now(),
      ownerId: "mock-user-id",
      imageUrl: "",
    });
  }

  async function updateProduct(id: string, data: Partial<Product>) {
    await editProduct(id, data);
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
    createProductPost,
    updateProduct,
    remove,
    toggleActive,
  };
}
