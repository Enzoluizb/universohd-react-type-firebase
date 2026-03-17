import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";
import { uploadImage } from "../../services/uploadImage";
import { formatWhatsapp } from "../../utils/formatWhatsapp";

type Props = {
  product: Product;
  onClose: () => void;
};

export default function EditProductModal({ product, onClose }: Props) {
  const { updateProduct } = useProducts();

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description || "");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappRaw, setWhatsappRaw] = useState("");
  const [imageFiles, setImageFiles] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    product.images ?? [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description || "");

    const raw = product.whatsapp || "";
    setWhatsappRaw(raw);
    setWhatsapp(formatWhatsapp(raw));

    setImagePreviews(product.images ?? []);
    setImageFiles([null, null, null]);
  }, [product]);

  async function handleSave() {
    try {
      setLoading(true);

      // Para cada slot: se tiver novo arquivo, faz upload; senão mantém a URL antiga
      const updatedImages = await Promise.all(
        [0, 1, 2].map(async (i) => {
          if (imageFiles[i]) {
            return await uploadImage(imageFiles[i]!);
          }
          return imagePreviews[i] ?? null;
        }),
      );

      // Remove nulls (slots vazios)
      const images = updatedImages.filter((url): url is string => !!url);

      await updateProduct(product.id!, {
        title,
        description,
        whatsapp: whatsappRaw,
        images,
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

        <input
          className="border p-2 w-full mb-3"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Descrição"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="tel"
          inputMode="numeric"
          className="border p-2 w-full mb-3"
          placeholder="WhatsApp (ex: (47) 99999-9999)"
          value={whatsapp}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
            setWhatsappRaw(raw);
            setWhatsapp(formatWhatsapp(raw));
          }}
        />

        {/* 3 slots de imagem */}
        {[0, 1, 2].map((index) => (
          <div key={index} className="mb-3">
            {imagePreviews[index] && (
              <img
                src={imagePreviews[index]}
                alt={`Imagem ${index + 1}`}
                className="w-full h-32 object-cover rounded mb-1"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                if (!file) return;

                setImageFiles((prev) => {
                  const copy = [...prev];
                  copy[index] = file;
                  return copy;
                });

                setImagePreviews((prev) => {
                  const copy = [...prev];
                  copy[index] = URL.createObjectURL(file);
                  return copy;
                });
              }}
            />
          </div>
        ))}

        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}
