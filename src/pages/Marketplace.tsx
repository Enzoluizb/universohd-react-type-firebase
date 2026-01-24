import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/Product";
import EditProductModal from "../components/marketplace/EditProductModal";
import CreateProductModal from "../components/marketplace/CreateProductModal";

export default function Marketplace() {
  const { products, remove, toggleActive } = useProducts();

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => setShowCreateModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Nova postagem
      </button>

      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <strong>{product.title}</strong>
              <p>Status: {product.active ? "Ativo" : "Inativo"}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleActive(product)}
                className="bg-yellow-500 text-white px-3 py-1"
              >
                Ativar/Inativar
              </button>

              <button
                onClick={() => remove(product.id)}
                className="bg-red-600 text-white px-3 py-1"
              >
                Excluir
              </button>

              <button
                onClick={() => setEditingProduct(product)}
                className="px-3 py-1 bg-blue-600 text-white"
              >
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}

      {showCreateModal && (
        <CreateProductModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
