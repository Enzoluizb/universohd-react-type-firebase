const vantagensEmbaixadora = [
  "Selo único de Embaixadora HD",
  "Livre acesso a todas as Mentorias do Universo HD",
  "Visibilidade nas redes sociais do Universo HD",
  "Parcerias e estratégias de vendas",
  "Reconhecimento no Evento Internacional",
  "Acesso a conteúdos exclusivos",
  "Comunidade Exclusiva",
];

export default function EmbaixadoraHD() {
  const goToWhats = () => {
    const message = encodeURIComponent(
      "Quero saber mais sobre o nível Embaixadora HD!",
    );
    window.open(
      `https://api.whatsapp.com/send?phone=5547999297424&text=${message}`,
      "_blank",
    );
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-yellow-400 to-white overflow-hidden">
      {/* Imagem mobile */}
      <img
        src="/images/embaixadorahd2.jpeg"
        className="absolute inset-0 w-full h-[470px] object-cover object-[30%_10%] z-0 lg:hidden"
        alt="Embaixadora HD"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-yellow-200 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-8 pb-16 px-4">
        {/* topo */}
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="text-center">
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg">
              Seja uma Embaixadora HD
            </h1>
          </div>

          <div className="hidden lg:flex justify-center w-full">
            <div className="w-80 h-80 rounded-3xl border border-white shadow-xl overflow-hidden">
              <img
                src="/images/embaixadorahd2.jpeg"
                className="w-full h-full object-cover object-[35%_1%] scale-100"
                alt="Embaixadora HD Desktop"
              />
            </div>
          </div>
        </div>

        {/* descrição */}
        <div className="max-w-4xl mx-auto">
          <div className="text-lg mb-8 bg-white p-8 rounded-3xl shadow-md">
            <h1 className="text-3xl mb-4 font-bold text-gray-900 text-center lg:text-left">
              O que é o Embaixadoras HD?
            </h1>
            <p className="mb-3 text-left">
              Embaixadoras HD é o último nível da escada de crescimento do
              Ateliê House Decor!
            </p>
            <p className="mb-3 text-left">
              É o momento de lapidação final, uma Mentoria preparada para
              desenvolver ainda mais o potencial comercial de nossas Alunas.
            </p>
            <p className="mb-3 text-left">
              Neste período, a Aluna recebe a chancela e o selo de Embaixadora
              HD, sendo um espelho e uma representante do Ateliê House Decor.
            </p>
            <p className="mb-3 text-left font-semibold">
              Quem está apta a ingressar neste nível? Todas as Master MindsHD.
            </p>
          </div>

          {/* vantagens */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-6">
            Vantagens de ser Embaixadora HD
          </h2>
          <div className="mb-8 bg-white p-8 rounded-3xl shadow-md text-base lg:text-lg">
            <ul className="grid grid-cols-1 gap-y-5">
              {vantagensEmbaixadora.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-900 leading-relaxed"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* bloco final */}
          <div className="w-full p-8 shadow-2xl rounded-3xl bg-white text-gray-900 border border-yellow-400">
            <div className="flex items-center border-yellow-200 border-l-4 border-yellow-400 pl-4 mb-6 pb-2">
              <span className="text-2xl font-semibold text-gray-900">
                Embaixadora HD
              </span>
            </div>

            <ul className="mt-4 border-t border-yellow-400 pt-2 mb-10 font-medium text-lg lg:text-xl text-gray-900">
              <li className="flex mb-6">
                <i className="fa-solid fa-check text-yellow-500 text-2xl mt-1" />
                <span className="ml-4 text-left">
                  Tenha o selo único de Embaixadora HD. Tenha a visibilidade de
                  quem não mediu esforços para se desenvolver com as melhores
                  profissionais deste mercado!
                </span>
              </li>
              <li className="flex mb-6">
                <i className="fa-solid fa-check text-yellow-500 text-2xl mt-1" />
                <span className="ml-4 text-left">
                  Se você já é uma Master MindHD, ou está cursando, entre agora
                  mesmo em contato para garantir o seu lugar no nível máximo do
                  Universo HD!
                </span>
              </li>
            </ul>

            <button
              onClick={goToWhats}
              className="w-full flex justify-center items-center bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105 rounded-xl py-6 text-center text-white text-2xl shadow-xl font-bold mt-6"
            >
              Quero ser Embaixadora HD!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
