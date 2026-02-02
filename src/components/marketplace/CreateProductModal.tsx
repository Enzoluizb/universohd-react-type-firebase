import { useState } from "react";
import BaseModal from "../ui/BaseModal";
import { useProducts } from "../../hooks/useProducts";

type Props = {
  onClose: () => void;
};

export default function CreateProductModal({ onClose }: Props) {
  const { createProductPost } = useProducts();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [image, setImage] = useState<File | null>(null);

  async function handlePublish() {
    if (!title || !description || !whatsapp) return;

    await createProductPost({
      title,
      description,
      whatsapp,
      image,
    });

    onClose();
  }

  return (
    <BaseModal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        Criar um produto do marketplace UniversoHD
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        placeholder="Descrição"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="WhatsApp (ex: 5547999999999)"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={(e) => setImage(e.target.files?.[0] ?? null)}
      />

      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 text-gray-600">
          Cancelar
        </button>

        <button
          onClick={handlePublish}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Publicar
        </button>
      </div>
    </BaseModal>
  );
}
