import { useContext } from "react";
import type { Product } from "../../types/Product";
import { AuthContext } from "../../contexts/AuthContext";
import {
  canEditProduct,
  canDeleteProduct,
  canToggleActive,
} from "../../utils/permissions";
import { Pencil, Trash2 } from "lucide-react";

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
    const url = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  }

  const showEdit = canEditProduct(user, product);
  const showDelete = canDeleteProduct(user, product);
  const showToggleActive = canToggleActive(user, product);

  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white">
      <div>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-40 w-full object-cover rounded mb-3"
          />
        ) : (
          <div className="bg-gray-100 h-40 rounded mb-3" />
        )}

        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>

        <p className="text-sm text-gray-600 mb-3">{product.description}</p>

        <span
          className={`inline-block text-xs px-2 py-1 rounded-full ${
            product.active
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {product.active ? "Ativo" : "Inativo"}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4 gap-2">
        {/* Ação principal */}
        {product.active && (
          <button
            onClick={handleAcquire}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-sm rounded transition"
          >
            Quero adquirir
          </button>
        )}

        {/* Ações secundárias */}
        <div className="flex items-center gap-2 ml-auto">
          {showToggleActive && (
            <button
              onClick={() => onToggleActive(product)}
              className="text-xs text-gray-500 hover:text-gray-800 transition"
            >
              {product.active ? "Inativar" : "Ativar"}
            </button>
          )}

          {showEdit && (
            <button
              onClick={() => onEdit(product)}
              className="text-gray-500 hover:text-blue-600 transition"
              title="Editar"
            >
              <Pencil size={18} />
            </button>
          )}

          {showDelete && (
            <button
              onClick={() => onRemove(product.id)}
              className="text-gray-400 hover:text-red-600 transition"
              title="Excluir"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
