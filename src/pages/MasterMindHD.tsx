const competenciasMastermind = [
  {
    icon: "fa-solid fa-circle-check",
    title: "Aluna HD = TPM",
    desc: "Mulheres que buscam desenvolver a sua pintura",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "Especialistas HD = TPM + Negócios",
    desc: "Desenvolvem e aperfeiçoam com estratégia",
  },
  {
    icon: "fa-solid fa-circle-check",
    title: "Master Minds HD",
    desc: "Pensam, executam e sentam à mesa comigo.",
  },
];

const vantagensMastermind = [
  "Triplo selo",
  "Visibilidade nas redes",
  "Manifestar sua melhor versão",
  "Acesso a conteúdos exclusivos",
  "Conhecimento",
  "Comunidade",
  "Novos hábitos",
  "Mentalidade vencedora",
];

export default function MasterMindHD() {
  const goToWhats = () => {
    const message = encodeURIComponent("Quero fazer parte do Master MindHD!");
    window.open(
      `https://api.whatsapp.com/send?phone=5547999297424&text=${message}`,
      "_blank",
    );
  };

  return (
    <main className="h-full relative bg-gradient-to-b from-blue-800 to-white">
      {/* imagem mobile */}
      <img
        src="/images/mastermind2.jpeg"
        className="absolute inset-0 w-full h-[470px] object-cover object-[30%_10%] z-0 lg:hidden"
        alt="MasterMindHD"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-blue-200 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-8 pb-16 px-4">
        {/* topo */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="text-center">
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg">
              Seja uma Master MindHD
            </h1>
          </div>

          <div className="hidden lg:flex justify-center w-full">
            <div className="w-80 h-80 rounded-3xl rounded-3xl border border-white shadow-xl overflow-hidden">
              <img
                src="/images/mastermind2.jpeg"
                className="w-full h-full object-cover object-[35%_1%] scale-100"
              />
            </div>
          </div>
        </div>

        {/* descrição */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
            Conheça o Master MindHD
          </h2>
          <p className="mb-3 text-gray-700">
            Uma mentalidade VENCEDORA pode ser desenvolvida! Este é o objetivo
            do Master MindHD, desenvolver e encorajar mulheres a manifestarem a
            sua melhor versão e viverem emocionalmente bem.
          </p>
          <p className="mb-3 text-gray-700">
            Por que estamos aqui? Este tempo no Master MindHD nos trará clareza
            e lapidação do nosso propósito.
          </p>
          <p className="mb-3 text-gray-700 font-semibold">
            Quem está apta a entrar no Master MindHD? Todas as Especialistas HD.
          </p>
        </div>

        {/* cards competências */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {competenciasMastermind.map((item) => (
            <li
              key={item.title}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center"
            >
              <i className={`${item.icon} text-3xl mb-3 text-blue-800`} />
              <p className="font-extrabold mb-1 text-gray-900">{item.title}</p>
              <span className="font-semibold text-sm text-gray-700">
                {item.desc}
              </span>
            </li>
          ))}
        </ul>

        {/* vantagens */}
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-8">
          Vantagens de ser Master MindHD
        </h2>

        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12">
            {vantagensMastermind.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-900 font-medium"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white text-xs" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* bloco final */}
        <div className="w-full p-10 shadow-xl rounded-3xl bg-white text-gray-800">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-200">
            <img
              src="/images/mastermindHDselo.jpeg"
              alt="Selo Master MindHD"
              className="rounded-3xl w-32 h-32 bg-white object-contain mr-5"
            />
            <span className="text-3xl font-semibold text-gray-900">
              Master MindHD
            </span>
          </div>

          <ul className="mb-10 font-medium text-xl">
            <li className="flex items-start mb-6">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mt-1">
                <i className="fa-solid fa-check text-white text-xs" />
              </span>
              <span className="ml-4 text-left">
                Triplo Selo (Aluna HD, Especialista HD e Master MindHD) Suas
                peças serão vistas por milhares de pessoas e você poderá
                comercializar através do portal universoHD.com.br
              </span>
            </li>
          </ul>

          <blockquote className="text-xl italic font-semibold text-gray-900 mb-10 border-l-4 border-gray-400 pl-4">
            Se você está cursando ou já cursou a Mentoria HD, entre em contato e
            faça parte do terceiro nível House Decor
          </blockquote>

          <button
            onClick={goToWhats}
            className="w-full flex justify-center items-center bg-blue-800 hover:bg-blue-700 transition-all transform hover:scale-105 rounded-xl py-6 text-center text-white text-2xl font-bold shadow-xl"
          >
            Quero ser Master MindHD!
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-3 w-6 h-6"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
