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
    text: "Tenha acesso imediato ao e-book de todas as aulas gravadas do curso, passo a passo das técnicas.",
  },
  {
    title: "Técnica TPM",
    icon: "fa-lightbulb",
    text: "Tempo, Pintura e Mente — um método prático e transformador.",
  },
  {
    title: "Lives Exclusivas",
    icon: "fa-youtube",
    text: "Lives exclusivas do Ateliê House Decor disponíveis na plataforma do curso.",
  },
  {
    title: "Lista de Fornecedores",
    icon: "fa-list",
    text: "Minha lista completa de fornecedores testados e aprovados pelo ateliê.",
  },
  {
    title: "Comunidade HD",
    icon: "fa-comment-dots",
    text: "Conexão com mulheres que compartilham objetivos e experiências.",
  },
];

export default function AlunaHD() {
  return (
    <div>
      <main className="h-full relative bg-gradient-to-t from-emerald-100 to-white">
        <img
          src="/images/AlunaHDSection.jpeg"
          className="absolute inset-0 w-full h-[470px] object-cover object-center z-0 lg:hidden"
          alt="Aluna HD"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-100 opacity-40 -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 pt-6 pb-16 px-4">
          <div className="flex flex-col lg:flex-col items-center justify-center gap-5 mb-8">
            <div className="hidden lg:flex justify-center w-full lg:w-auto">
              <div className="w-[420px] h-[260px] rounded-3xl border-2 border-white shadow-2xl overflow-hidden ring-4 ring-emerald-200/30">
                <img
                  src="/images/AlunaHDSection.jpeg"
                  className="w-full h-full object-cover object-center"
                  alt="Aluna HD"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <a
                href="https://pay.hotmart.com/L60469525G"
                className="inline-block"
              >
                <h1 className="font-extrabold tracking-tight text-white bg-emerald-700 px-6 py-2 rounded-full text-xl md:text-2xl hover:scale-105 transition-transform uppercase">
                  Seja Aluna HD
                </h1>
              </a>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 max-w-4xl mx-auto leading-tight">
              Saiba como ter uma fonte de renda super lucrativa através da
              pintura de peças artesanais incríveis!
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cards.map((c) => (
              <li
                key={c.title}
                className="bg-white rounded-xl p-6 shadow-lg card flex flex-col items-center text-center"
              >
                <i
                  className={`fa-solid ${c.icon} text-3xl mb-4 text-emerald-800`}
                />
                <p className="font-extrabold mb-2 uppercase text-emerald-700">
                  {c.title}
                </p>
                <p className="text-sm text-gray-700">{c.text}</p>
              </li>
            ))}

            <li className="bg-white rounded-xl p-6 shadow-lg card flex flex-col items-center text-center">
              <img
                src="/images/alunaHDselo.png"
                alt="Selo"
                className="w-16 h-16 mb-4 object-contain"
              />
              <p className="font-extrabold mb-2 uppercase text-emerald-700">
                Selo Aluna HD
              </p>
              <p className="text-sm text-gray-700">
                Todas suas peças serão vistas por milhares de pessoas. Quer
                mostrar suas lindas criações? Aqui a Aluna HD aparece!
              </p>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-emerald-50 to-emerald-200 p-8 rounded-xl border-2 border-emerald-200 mb-12">
            <h2 className="text-3xl font-extrabold mb-8 text-emerald-800 text-center lg:text-left">
              Não é apenas um curso de pintura
            </h2>
            <div className="space-y-4 text-emerald-800">
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-600" />{" "}
                <span>
                  Conteúdo muito completo para você que quer desenvolver sua
                  pintura e buscar crescimento pessoal;
                </span>
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-600" />{" "}
                <span>Tenha um estilo definido;</span>
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-600" />{" "}
                <span>
                  Aprenda de maneira detalhada várias técnicas de pintura em
                  madeira e fabricação de lindas guirlandas;
                </span>
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-600" />{" "}
                <span>
                  Abordamos também o mental para destruir crenças que limitam
                  sua evolução;
                </span>
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-circle-check mt-1 text-emerald-600" />{" "}
                <span>
                  Faça parte de um grupo de mulheres comprometidas no
                  desenvolvimento técnico e mental;
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src="/images/garanty.png"
                className="h-40 object-contain"
                alt="Garantia"
              />
            </div>
          </div>

          <div className="w-full p-8 shadow-xl rounded-3xl bg-emerald-900 text-emerald-100">
            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img
                src="/images/alunaHDselo.png"
                alt="Selo"
                className="rounded-3xl w-20 h-20 bg-white object-contain p-2"
              />
              <div className="ml-5">
                <span className="text-3xl font-semibold text-white">
                  Aluna HD
                </span>
              </div>
            </div>
            <ul className="mb-10 font-medium text-xl">
              <li className="flex mb-6 items-start">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  className="mt-1"
                />
                <span className="text-left ml-4">
                  Saiba como ter uma fonte de renda super lucrativa através da
                  pintura de peças artesanais incríveis!
                </span>
              </li>
            </ul>
            <blockquote className="text-xl italic font-semibold text-white mb-10 border-l-4 border-emerald-600 pl-4">
              “Aproveite a oportunidade de ser uma Aluna HD, não perca!”
            </blockquote>
            <a
              href="https://pay.hotmart.com/L60469525G"
              className="flex justify-center items-center bg-emerald-600 hover:bg-emerald-500 transition-all transform hover:scale-105 rounded-xl py-6 px-4 text-center text-white text-2xl font-bold shadow-xl"
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
    </div>
  );
}
