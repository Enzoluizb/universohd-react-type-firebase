import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { usePagination } from "../hooks/usePagination";
import type { Product } from "../types/Product";

import EditProductModal from "../components/marketplace/EditProductModal";
import CreateProductModal from "../components/marketplace/CreateProductModal";
import ProductCard from "../components/marketplace/ProductCard";
import { useAuth } from "../hooks/useAuth";

const ROLE_ORDER: Record<string, number> = {
  embaixadora: 1,
  mastermind: 2,
  especialista: 3,
};

export default function Marketplace() {
  const { user } = useAuth();
  const { products, remove, toggleActive } = useProducts();

  const sortedProducts = [...products].sort((a, b) => {
    const orderA = ROLE_ORDER[a.ownerRole ?? ""] ?? 99;
    const orderB = ROLE_ORDER[b.ownerRole ?? ""] ?? 99;
    return orderA - orderB;
  });

  const { displayedItems, currentPage, setCurrentPage, totalPages } =
    usePagination(sortedProducts, 8);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-black mb-3">
        Adquira as peças das Especialistas HD, Master Minds HD e Embaixadoras HD
        2026
      </h1>

      <p className="text-gray-700 mb-2">
        Explore uma variedade de produtos artesanais únicos, criados com amor
        pelas nossas talentosas alunas. Seja parte deste universo de
        criatividade!
      </p>

      <p className="text-red-600 font-semibold mb-6">
        *Especialistas HD, Master Minds HD e Embaixadoras HD — Atualmente ativas
        no Universo HD 2026
      </p>

      {user && (
        <div className="mb-8">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all"
          >
            Nova Postagem
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={setEditingProduct}
            onRemove={remove}
            onToggleActive={toggleActive}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={
              "px-3 py-1 rounded-md " +
              (currentPage === i + 1
                ? "bg-yellow-500 text-white"
                : "bg-gray-100")
            }
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50"
        >
          Próxima
        </button>
      </div>

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
