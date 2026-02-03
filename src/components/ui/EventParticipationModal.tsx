import { useState } from "react";
import BaseModal from "./BaseModal";

type Props = {
  onClose: () => void;
};

export default function EventParticipationModal({ onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [nome, setNome] = useState("");

  function enviarWhatsApp() {
    if (!nome.trim()) return;

    const mensagem = encodeURIComponent(
      `Olá Andressa, eu ${nome} quero participar do próximo evento presencial.`,
    );

    window.location.href = `https://wa.me/5547999297424?text=${mensagem}`;
  }

  return (
    <BaseModal onClose={onClose}>
      {step === 1 ? (
        <>
          <h2 className="text-xl font-bold mb-4">
            Inscrições ABERTAS para o evento presencial
          </h2>

          <p className="mb-6">
            Quer garantir sua vaga para o próximo encontro?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Não desta vez
            </button>

            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Sim, quero participar
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Envie seu nome completo</h2>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>

            <button
              onClick={enviarWhatsApp}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </BaseModal>
  );
}
