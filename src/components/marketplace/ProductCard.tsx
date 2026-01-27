// src/components/products/ProductCard.tsx
import { useContext } from "react";
import type { Product } from "../../types/Product";
import { AuthContext } from "../../contexts/AuthContext";
import {
  canEditProduct,
  canDeleteProduct,
  canToggleActive,
} from "../../utils/permissions";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onRemove: (id?: string) => void;
  onToggleActive: (product: Product) => void;
};

export default function ProductCard({
  product,
  onEdit,
  onRemove,
  onToggleActive,
}: Props) {
  const { user } = useContext(AuthContext);

  function handleAcquire() {
    if (!product.whatsapp) return;

    const message = `Olá, vi seu produto "${product.title}" no Site do UniversoHD e gostaria de saber mais informações.`;
    const url = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  const showEdit = canEditProduct(user, product);
  const showDelete = canDeleteProduct(user, product);
  const showToggleActive = canToggleActive(user, product);

  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm">
      <div>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-40 w-full object-cover rounded mb-3"
          />
        ) : (
          <div className="bg-gray-200 h-40 rounded mb-3" />
        )}
        <h3 className="font-bold text-lg mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-sm mb-1">
          Status:{" "}
          <span className={product.active ? "text-green-600" : "text-gray-400"}>
            {product.active ? "Ativo" : "Inativo"}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {product.active && (
          <button
            onClick={handleAcquire}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm rounded transition"
          >
            Quero adquirir
          </button>
        )}

        {showToggleActive && (
          <button
            onClick={() => onToggleActive(product)}
            className="bg-yellow-500 text-white px-3 py-1 text-sm rounded"
          >
            Ativar/Inativar
          </button>
        )}

        {showDelete && (
          <button
            onClick={() => onRemove(product.id)}
            className="bg-red-600 text-white px-3 py-1 text-sm rounded"
          >
            Excluir
          </button>
        )}

        {showEdit && (
          <button
            onClick={() => onEdit(product)}
            className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
