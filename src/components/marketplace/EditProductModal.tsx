import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";
import { uploadImage } from "../../services/uploadImage";

type Props = {
  product: Product;
  onClose: () => void;
};

export default function EditProductModal({ product, onClose }: Props) {
  const { updateProduct } = useProducts();

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(product.imageUrl || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description || "");
    setImagePreview(product.imageUrl || "");
    setImageFile(null);
  }, [product]);

  async function handleSave() {
    try {
      setLoading(true);

      let imageUrl = product.imageUrl;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await updateProduct(product.id!, {
        title,
        description,
        imageUrl,
      });

      onClose();
    } catch (error) {
      console.error("Erro ao atualizar produto", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar produto</h2>

        {/* Título */}
        <input
          className="border p-2 w-full mb-3"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        {/* Descrição */}
        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Descrição"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Preview da imagem */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt={title}
            className="w-full h-40 object-cover rounded mb-3"
          />
        )}

        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
          }}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="bg-gray-400 text-white px-4 py-2 disabled:opacity-50"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}
