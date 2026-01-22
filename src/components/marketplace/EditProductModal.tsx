import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";

type Props = {
  product: Product;
  onClose: () => void;
};

export default function EditProductModal({ product, onClose }: Props) {
  const { updateProduct } = useProducts();
  const [title, setTitle] = useState(product.title);

  useEffect(() => {
    setTitle(product.title);
  }, [product]);

  async function handleSave() {
    await updateProduct(product.id!, { title });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar produto</h2>

        <input
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
