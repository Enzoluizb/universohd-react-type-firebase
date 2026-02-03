import { useState } from "react";
import EventParticipationModal from "../ui/EventParticipationModal";

export default function EncontroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pt-10 pb-16 flex justify-center px-4 sm:px-6">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col rounded-xl bg-white shadow-md overflow-hidden">
          {/* Imagem */}
          <div className="relative overflow-hidden">
            <img
              src="/images/evento_2026.jpeg"
              alt="Encontro Internacional Universo HD 2026"
              className="w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="px-4 pt-6 pb-6 space-y-4">
            <h5 className="text-xl font-semibold text-gray-900 leading-snug">
              Encontro Internacional Universo HD 2026 em Curitiba/PR – Junho
              2026
            </h5>

            <p className="text-base font-light text-gray-700 leading-relaxed">
              Este é o momento em que encontramos pessoalmente as Especialistas
              HD, as Master Minds HD e as Embaixadoras HD em um final de semana
              de muita celebração, trocas de experiências e a certificação das
              Alunas que estão se formando.
            </p>
          </div>

          {/* Botão */}
          <div className="px-6 pb-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full rounded-lg bg-gray-900 py-3 text-xs font-bold uppercase text-white transition hover:bg-gray-800"
            >
              Quero Participar
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <EventParticipationModal onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}
