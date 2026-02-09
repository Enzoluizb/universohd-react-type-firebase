import { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  toggleProductActive,
  subscribeProducts,
  editProduct,
} from "../services/products";

import { uploadImage } from "../services/uploadImage";
import type { Product } from "../types/Product";
import { useAuth } from "./useAuth";

type CreateProductPostInput = {
  title: string;
  description: string;
  whatsapp: string;
  images?: (File | null)[];
};


export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { user } = useAuth();

  async function createProductPost(data: CreateProductPostInput) {
    let imageUrls: string[] = [];

    if (data.images && data.images.length > 0) {
      const validImages = data.images.filter(
        (file): file is File => file instanceof File
      );

      imageUrls = await Promise.all(
        validImages.map((file) => uploadImage(file))
      );
    }

    if (!user) throw new Error("Usuário não autenticado");

    await createProduct({
      title: data.title,
      description: data.description,
      whatsapp: data.whatsapp,

      // legado (compatibilidade)
      imageUrl: imageUrls[0] ?? "",

      // novo
      images: imageUrls,

      active: true,
      createdAt: Date.now(),
      ownerId: user.uid,
      ownerName: user.name || "Usuário",
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
