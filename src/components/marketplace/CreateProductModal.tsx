import { useState } from "react";
import BaseModal from "../ui/BaseModal";
import { useProducts } from "../../hooks/useProducts";
import { formatWhatsapp } from "../../utils/formatWhatsapp";

type Props = {
  onClose: () => void;
};

export default function CreateProductModal({ onClose }: Props) {
  const { createProductPost } = useProducts();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<(File | null)[]>([null, null, null]);
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappRaw, setWhatsappRaw] = useState("");

  async function handlePublish() {
    if (!title || !description || whatsappRaw.length !== 11) return;

    await createProductPost({
      title,
      description,
      whatsapp: whatsappRaw,
      images,
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

      {[0, 1, 2].map((index) => (
        <input
          key={index}
          type="file"
          accept="image/*"
          className="mb-2"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;

            setImages((prev) => {
              const copy = [...prev];
              copy[index] = file;
              return copy;
            });
          }}
        />
      ))}

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
