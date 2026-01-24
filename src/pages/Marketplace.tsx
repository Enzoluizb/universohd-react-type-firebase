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
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* TÍTULO */}
      <h1 className="text-3xl font-bold text-black mb-3">
        Adquira as peças das Especialistas HD, Master Minds HD e Embaixadoras HD
        2026
      </h1>

      {/* SUBTÍTULO */}
      <p className="text-gray-700 mb-2">
        Explore uma variedade de produtos artesanais únicos, criados com amor
        pelas nossas talentosas alunas. Seja parte deste universo de
        criatividade!
      </p>

      {/* SUBTÍTULO EM VERMELHO */}
      <p className="text-red-600 font-semibold mb-6">
        *Especialistas HD, Master Minds HD e Embaixadoras HD — Atualmente ativas
        no Universo HD 2026
      </p>

      {/* BOTÃO NOVA POSTAGEM */}
      <div className="mb-8">
        <button
          onClick={() => setShowCreateModal(true)}
          className="
            bg-gradient-to-r from-yellow-400 to-yellow-500
            hover:from-yellow-500 hover:to-yellow-600
            text-white font-semibold
            px-6 py-3 rounded-md
            shadow-md transition-all
          "
        >
          Nova Postagem
        </button>
      </div>

      {/* GRID DE POSTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* IMAGEM (placeholder por enquanto) */}
              <div className="bg-gray-200 h-40 rounded mb-3" />

              <h3 className="font-bold text-lg mb-1">{product.title}</h3>

              <p className="text-sm text-gray-600 mb-2">
                {product.description}
              </p>

              <p className="text-sm">
                Status:{" "}
                <span
                  className={
                    product.active ? "text-green-600" : "text-gray-400"
                  }
                >
                  {product.active ? "Ativo" : "Inativo"}
                </span>
              </p>
            </div>

            {/* AÇÕES (admin por enquanto) */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => toggleActive(product)}
                className="bg-yellow-500 text-white px-3 py-1 text-sm rounded"
              >
                Ativar/Inativar
              </button>

              <button
                onClick={() => remove(product.id)}
                className="bg-red-600 text-white px-3 py-1 text-sm rounded"
              >
                Excluir
              </button>

              <button
                onClick={() => setEditingProduct(product)}
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAIS */}
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
