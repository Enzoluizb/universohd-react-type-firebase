import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/Product";
import EditProductModal from "../components/marketplace/EditProductModal";

export default function Marketplace() {
  const { products, title, setTitle, create, remove, toggleActive } =
    useProducts();

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        CRUD – Marketplace (Realtime Firebase)
      </h1>

      <div className="mb-6 flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Nome do produto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={create} className="bg-blue-600 text-white px-4 py-2">
          Criar
        </button>
      </div>

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
    </div>
  );
}
