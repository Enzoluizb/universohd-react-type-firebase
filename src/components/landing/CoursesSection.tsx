import { Link } from "react-router-dom";

export default function CoursesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* ALUNA HD */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-md mx-auto">
            <img
              src="/images/AlunaHD.jpeg"
              alt="Aluna HD"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Curso de Pintura Criativa em Madeira – Aluna HD
              </h3>
              <p className="text-gray-700 text-sm flex-1">
                Seja Aluna HD e tenha acesso a mais de 350 aulas!
              </p>

              <Link
                to="/alunahd"
                className="mt-6 inline-block text-center bg-gray-900 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Quero ser Aluna HD
              </Link>
            </div>
          </div>

          {/* ESPECIALISTA HD */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-md mx-auto">
            <img
              src="/images/EspecialistaHD.jpeg"
              alt="Especialista HD"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mentoria HD – Especialista HD
              </h3>
              <p className="text-gray-700 text-sm flex-1">
                Para as Alunas HD que desejam profissionalizar a sua arte e
                serem mais produtivas!
              </p>

              <Link
                to="/especialistahd"
                className="mt-6 inline-block text-center bg-gray-900 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Quero ser Especialista HD
              </Link>
            </div>
          </div>

          {/* MASTER MINDHD */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-md mx-auto">
            <img
              src="/images/MasterMindHD.jpeg"
              alt="Master Mind HD"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Master MindHD
              </h3>
              <p className="text-gray-700 text-sm flex-1">
                Sente à mesa com Andressa Ferreira e mergulhe em um nível mais
                profundo de conhecimento.
              </p>

              <Link
                to="/mastermindhd"
                className="mt-6 inline-block text-center bg-gray-900 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Quero ser Master MindHD
              </Link>
            </div>
          </div>

          {/* EMBAIXADORA HD */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-md mx-auto">
            <img
              src="/images/EmbaixadoraHD.jpeg"
              alt="Embaixadora HD"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Embaixadoras HD
              </h3>
              <p className="text-gray-700 text-sm flex-1">
                O último nível da escada de crescimento do Universo HD.
              </p>

              <Link
                to="/embaixadorahd"
                className="mt-6 inline-block text-center bg-gray-900 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Quero ser Embaixadora HD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
