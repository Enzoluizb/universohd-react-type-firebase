const cards = [
  {
    title: "Pintura em Pinus e MDF",
    icon: "fa-paintbrush",
    text: "Saiba como produzir peças incríveis com qualidade destacada utilizando alguns estilos que são sucesso garantido!",
  },
  {
    title: "Guirlandas",
    icon: "fa-holly-berry",
    text: "Aprenda a fabricar guirlandas com ótimo acabamento. Peças para vender o ano inteiro, ótima fonte de renda.",
  },
  {
    title: "Acesse quando quiser",
    icon: "fa-cloud",
    text: "Por um ano tenha acesso a centenas de aulas e todo suporte de Andressa Ferreira!",
  },
  {
    title: "E-book",
    icon: "fa-book",
    text: "Tenha acesso imediato ao e-book de todas as aulas gravadas do curso, passo a passo das técnicas, identificação das tintas e materiais utilizados.",
  },
  {
    title: "Técnica TPM",
    icon: "fa-lightbulb",
    text: "Tempo, Pintura e Mente, vamos trabalhar estes 3 pilares! É um método que posso te garantir, fez toda a diferença na minha vida e com certeza vai te ajudar também.",
  },
  {
    title: "Lives Exclusivas",
    icon: "fa-youtube",
    text: "Algumas lives do Ateliê House Decor não ficam disponíveis nos meus canais, porém a Aluna HD tem acesso a essas lives pela plataforma do curso.",
  },
  {
    title: "Lista de Fornecedores",
    icon: "fa-list",
    text: "Além de todos estes benefícios, vou disponibilizar a minha lista completa de fornecedores, testados e aprovados pelo ateliê House Decor e muitos deles com descontos exclusivos para as Alunas HD.",
  },
  {
    title: "Comunidade HD",
    icon: "fa-comment-dots",
    text: "Você estará conectada com várias mulheres com o mesmo objetivo, trocando experiências e recebendo em primeira mão algumas dicas aqui do ateliê.",
  },
];

export default function AlunaHD() {
  return (
    <main className="h-full relative bg-gradient-to-t from-emerald-100 to-white">
      {/* imagem mobile */}
      <img
        src="/images/AlunaHDSection.jpeg"
        className="absolute inset-0 w-full h-[470px] object-cover object-center z-0 lg:hidden"
        alt="Aluna HD"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-emerald-100 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-8 pb-16 px-4">
        {/* topo */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="hidden lg:flex justify-center">
            <div className="w-[420px] h-[260px] rounded-3xl border border-white shadow-xl overflow-hidden">
              <img
                src="/images/AlunaHDSection.jpeg"
                className="w-full h-full object-cover"
                alt="Aluna HD"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://pay.hotmart.com/L60469525G"
              className="inline-block"
            >
              <span className="inline-block bg-emerald-800 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-emerald-700 transition">
                Seja Aluna HD
              </span>
            </a>

            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-white lg:text-emerald-900 drop-shadow lg:drop-shadow-none">
              Curso Aluna HD
            </h1>
          </div>
        </div>

        {/* chamada */}
        <div className="mb-10 text-center">
          <p className="text-lg lg:text-xl text-emerald-900 max-w-4xl mx-auto leading-relaxed font-medium">
            Saiba como ter uma fonte de renda super lucrativa através da pintura
            de peças artesanais incríveis.
          </p>
        </div>

        {/* cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {cards.map((c) => (
            <li
              key={c.title}
              className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm flex flex-col items-center text-center"
            >
              <i
                className={`fa-solid ${c.icon} text-2xl mb-3 text-emerald-900`}
              />
              <p className="text-sm font-medium text-emerald-800 mb-2">
                {c.title}
              </p>
              <p className="text-sm text-gray-700">{c.text}</p>
            </li>
          ))}

          <li className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm flex flex-col items-center text-center">
            <img
              src="/images/alunaHDselo.png"
              alt="Selo"
              className="w-16 h-16 mb-3 object-contain"
            />
            <p className="text-sm font-medium text-emerald-800 mb-2">
              Selo Aluna HD
            </p>
            <p className="text-sm text-gray-700">
              Todas suas peças serão vistas por milhares de pessoas. Quer
              mostrar suas lindas criações? Aqui a Aluna HD aparece!
            </p>
          </li>
        </ul>

        {/* conteúdo */}
        <div className="bg-white p-8 rounded-xl border border-emerald-200 shadow-sm mb-14">
          <h2 className="text-2xl lg:text-3xl font-semibold text-emerald-900 mb-6">
            Não é apenas um curso de pintura
          </h2>

          <div className="space-y-4 text-gray-700">
            {[
              "Conteúdo muito completo para você que quer desenvolver sua pintura e buscar crescimento pessoal;",
              "Tenha um estilo definido;",
              "Aprenda de maneira detalhada várias técnicas de pintura em madeira, fabricação de lindas guirlandas, peças decorativas e continue comigo por um ano na nossa comunidade HD;",
              "Além das aulas técnicas abordamos muito a sua maneira de pensar e o que fazer para destruir crenças que te limitam a evoluir;",
              "Faça parte de um grupo de mulheres comprometidas no desenvolvimento técnico e mental;",
            ].map((text) => (
              <p key={text} className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-800" />
                <span>{text}</span>
              </p>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <img
              src="/images/garanty.png"
              className="h-36 object-contain"
              alt="Garantia"
            />
          </div>
        </div>

        {/* bloco final */}
        <div className="w-full p-10 shadow-xl rounded-3xl bg-emerald-900 text-emerald-100">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="/images/alunaHDselo.png"
              alt="Selo"
              className="rounded-full w-28 h-28 bg-white object-contain p-2"
            />
            <div className="ml-5">
              <span className="text-3xl font-semibold text-white">
                Aluna HD
              </span>
            </div>
          </div>

          <ul className="mb-10 font-medium text-xl">
            <li className="flex items-start mb-6">
              <img
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                className="mt-1"
              />
              <span className="ml-4 text-left">
                Saiba como ter uma fonte de renda super lucrativa através da
                pintura de peças artesanais incríveis!
              </span>
            </li>
          </ul>

          <blockquote className="text-xl italic font-semibold text-white mb-10 border-l-4 border-emerald pl-4">
            “Aproveite a oportunidade de ser uma Aluna HD, não perca!”
          </blockquote>

          <a
            href="https://pay.hotmart.com/L60469525G"
            className="flex justify-center items-center bg-emerald-400 hover:bg-emerald-500 transition-all transform hover:scale-105 rounded-xl py-6 px-4 text-center text-white text-2xl font-bold shadow-xl"
          >
            SEJA ALUNA HD
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-3 w-6 h-6"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
