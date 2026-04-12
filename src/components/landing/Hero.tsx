import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 scale-105 blur-[1px]"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 sm:mb-10 drop-shadow-lg">
            Seja bem-vinda a Maior Comunidade de Pintura e Mente do Brasil!
          </h2>
          <p className=" mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed sm:leading-8 text-white drop-shadow-md max-w-xl lg:max-w-2xl text-balance">
            Explore nosso conjunto de cursos especializados para aprimorar suas
            habilidades em pintura criativa em madeira, profissionalize sua arte
            e alcance níveis mais altos de produtividade com a Mentoria HD e a
            Mentoria Negócios HD, e mergulhe em uma jornada de desenvolvimento
            pessoal com o Master MindHD!
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-white drop-shadow-md">
                Alunas em desenvolvimento
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-amber-400 drop-shadow-md">
                +500
              </dd>
            </div>
          </dl>

          <div className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start">
            <Link
              to="/marketplace"
              className="inline-block rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 
                hover:from-yellow-500 hover:to-yellow-600 
                px-6 py-5 shadow-xl text-sm font-semibold text-white 
                focus:outline-none focus:ring-2 focus:ring-yellow-400 
                focus:ring-offset-2 transition-all"
            >
              Adquira as peças das Especialistas HD, Master Minds HD e
              Embaixadoras HD 2026!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
