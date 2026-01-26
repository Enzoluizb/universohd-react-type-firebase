const competencias = [
  { icon: "fa-solid fa-lightbulb", text: "TPM - Visão Empreendedora" },
  { icon: "fa-solid fa-clock", text: "Gestão do Tempo" },
  { icon: "fa-solid fa-bullseye", text: "Propósito" },
  { icon: "fa-solid fa-paint-brush", text: "Estilo" },
  { icon: "fa-solid fa-people-arrows", text: "Transição do Negócio" },
  { icon: "fa-solid fa-briefcase", text: "O que preciso para empreender?" },
  { icon: "fa-brands fa-facebook", text: "Posicionamento nas mídias sociais" },
  { icon: "fa-solid fa-wrench", text: "Ferramentas nas mídias sociais" },
  { icon: "fa-solid fa-box-open", text: "Entrega Perfeita" },
  { icon: "fa-solid fa-rocket", text: "Início no campo de batalha" },
];

export default function EspecialistaHD() {
  return (
    <main className="h-full relative bg-gradient-to-t from-gray-100 to-white">
      {/* imagem mobile */}
      <img
        src="/images/especialistahd2.jpeg"
        className="absolute inset-0 w-full h-[470px] object-cover object-[center_42%] z-0 lg:hidden"
        alt="Especialista HD"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-100 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-8 pb-16 px-4">
        {/* topo */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="hidden lg:flex justify-center">
            <div className="w-[420px] h-[260px] rounded-3xl border border-white shadow-xl overflow-hidden">
              <img
                src="/images/especialistahd2.jpeg"
                className="w-full h-full object-cover"
                alt="Especialista HD"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://forms.gle/AEkhvKgwTtSRupSDA"
              className="inline-block"
            >
              <span className="inline-block bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-800 transition">
                Pré-inscrições abertas
              </span>
            </a>

            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-white lg:text-gray-900 drop-shadow lg:drop-shadow-none">
              Mentoria HD
            </h1>
          </div>
        </div>

        {/* descrição */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            Mentoria HD – Selo de Especialista HD
          </h2>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-gray-900" />
              <span>
                Mentoria HD é um direcionamento para você definitivamente
                empreender e vender de verdade, priorizando uma mente tranquila,
                leve e entregando produtos com excelência.
              </span>
            </p>

            <p className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-gray-900" />
              <span>
                Torne-se uma Especialista HD e tenha o selo dourado nas suas
                peças produzidas de acordo com o estilo que ensinamos no Ateliê
                House Decor!
              </span>
            </p>

            <p className="flex items-start gap-3 font-medium">
              <i className="fa-solid fa-circle-check mt-1 text-gray-900" />
              <span>
                Quem está apta a entrar na Mentoria HD? Alunas HD formadas ou
                cursando.
              </span>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <img
              src="/images/especialistaHDselo.png"
              className="h-28 object-contain"
              alt="Selo Especialista HD"
            />
          </div>
        </div>

        {/* competências */}
        <div className="mb-14">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-8">
            Especialistas em evidência
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencias.map((item) => (
              <li
                key={item.text}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center"
              >
                <i className={`${item.icon} text-2xl mb-3 text-gray-900`} />
                <p className="text-sm font-medium text-gray-800">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* bloco final */}
        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl text-center">
          <blockquote className="text-xl italic font-medium mb-10 max-w-3xl mx-auto">
            “Aproveite a oportunidade de se tornar uma Especialista HD.”
          </blockquote>

          <a
            href="https://forms.gle/AEkhvKgwTtSRupSDA"
            className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 transition rounded-md px-8 py-4 text-lg font-semibold"
          >
            Fazer minha aplicação
            <svg
              className="ml-3 w-5 h-5 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
