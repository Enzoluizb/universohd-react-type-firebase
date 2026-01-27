import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/Product";

import ProductCard from "../components/marketplace/ProductCard";
import EditProductModal from "../components/marketplace/EditProductModal";

export default function Profile() {
  const { user } = useAuth();
  const { products, remove, toggleActive } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  if (!user) return <p>Carregando usuário...</p>;

  const userProducts = products.filter((p) => p.ownerId === user.uid);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Suas Postagens</h1>

      {userProducts.length === 0 && (
        <p>Você ainda não publicou nenhum produto.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {userProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={setEditingProduct}
            onRemove={remove}
            onToggleActive={toggleActive}
          />
        ))}
      </div>

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
}
