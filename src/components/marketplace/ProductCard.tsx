import { useContext, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import type { Product } from "../../types/Product";
import { AuthContext } from "../../contexts/AuthContext";
import {
  canEditProduct,
  canDeleteProduct,
  canToggleActive,
} from "../../utils/permissions";
import ImagePreviewModal from "../ui/ImagePreviewModal";

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
  const [showPreview, setShowPreview] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const canEdit = canEditProduct(user, product);
  const canDelete = canDeleteProduct(user, product);
  const canToggle = canToggleActive(user, product);
  const isActive = product.active;

  function handleAcquire() {
    if (!product.whatsapp) return;

    const message = `Olá, vi seu produto "${product.title}" no Site do UniversoHD e gostaria de saber mais informações.`;
    const url = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  }

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.imageUrl
        ? [product.imageUrl]
        : [];

  function nextImage() {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white">
        <div>
          {/* Autor do produto */}
          <p className="text-xs text-gray-500 mb-0.5">Postado por</p>
          <p className="text-sm font-semibold text-black mb-2">
            {product.ownerName || "Usuário desconhecido"}
          </p>
          {images.length > 0 ? (
            <div className="relative mb-3">
              <img
                src={images[currentImage]}
                alt={product.title}
                onClick={() => setShowPreview(true)}
                className="h-40 w-full object-cover rounded cursor-pointer hover:opacity-90 transition"
              />

              {images.length > 1 && (
                <>
                  {/* esquerda */}
                  <button
                    onClick={prevImage}
                    className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-7 h-7 flex items-center justify-center shadow"
                  >
                    ‹
                  </button>

                  {/* direita */}
                  <button
                    onClick={nextImage}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-7 h-7 flex items-center justify-center shadow"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="bg-gray-100 h-40 rounded mb-3" />
          )}

          <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{product.description}</p>

          <span
            className={`inline-block text-xs px-2 py-1 rounded-full ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {isActive ? "Ativo" : "Inativo"}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          {isActive && (
            <button
              onClick={handleAcquire}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 text-sm rounded transition"
            >
              Quero adquirir
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {canToggle && (
              <button
                onClick={() => onToggleActive(product)}
                className="text-xs text-gray-500 hover:text-gray-800 transition"
              >
                {isActive ? "Inativar" : "Ativar"}
              </button>
            )}

            {canEdit && (
              <button
                onClick={() => onEdit(product)}
                className="text-gray-500 hover:text-blue-600 transition"
                title="Editar"
              >
                <Pencil size={18} />
              </button>
            )}

            {canDelete && (
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

      {showPreview && images[currentImage] && (
        <ImagePreviewModal
          imageUrl={images[currentImage]}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
