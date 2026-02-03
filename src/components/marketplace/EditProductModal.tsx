import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";
<<<<<<< HEAD
=======
import { uploadImage } from "../../services/uploadImage";
>>>>>>> 99767f91add5f8327a74bfde2a95d7a7df90b8c1

type Props = {
  product: Product;
  onClose: () => void;
};

export default function EditProductModal({ product, onClose }: Props) {
  const { updateProduct } = useProducts();
<<<<<<< HEAD
  const [title, setTitle] = useState(product.title);

  useEffect(() => {
    setTitle(product.title);
  }, [product]);

  async function handleSave() {
    await updateProduct(product.id!, { title });
    onClose();
=======

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

      // se o usuário escolheu uma nova imagem
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
>>>>>>> 99767f91add5f8327a74bfde2a95d7a7df90b8c1
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar produto</h2>

<<<<<<< HEAD
        <input
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
=======
        {/* Título */}
        <input
          className="border p-2 w-full mb-3"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Descrição */}
        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Descrição"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Preview da imagem atual / nova */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt={title}
            className="w-full h-40 object-cover rounded mb-3"
          />
        )}

        {/* Upload de imagem */}
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
>>>>>>> 99767f91add5f8327a74bfde2a95d7a7df90b8c1
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
<<<<<<< HEAD
            className="bg-gray-400 text-white px-4 py-2"
=======
            disabled={loading}
            className="bg-gray-400 text-white px-4 py-2 disabled:opacity-50"
>>>>>>> 99767f91add5f8327a74bfde2a95d7a7df90b8c1
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
<<<<<<< HEAD
            className="bg-blue-600 text-white px-4 py-2"
          >
            Salvar
=======
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
          >
            {loading ? "Salvando..." : "Salvar"}
>>>>>>> 99767f91add5f8327a74bfde2a95d7a7df90b8c1
          </button>
        </div>
      </div>
    </div>
  );
}
