export default function CardsInstagram() {
  return (
    <section className="bg-[#e3e1e6] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* CARD 1 */}
          <a
            href="https://www.instagram.com/ateliehousedecor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[32rem] overflow-hidden rounded-2xl"
          >
            <img
              src="/images/live-aula.jpg"
              alt="Live Aula HD"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Live Aula HD</h2>

              <p className="text-base text-gray-200 max-w-md mb-4">
                Aprenda técnicas de pintura criativa em madeira, conheça nosso
                método de ensino e interaja com Andressa Ferreira em uma tarde
                de muita criatividade.
              </p>

              <p className="text-sm text-gray-300 mb-6">
                Todas às segundas, às 15h
              </p>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/andressaProfile.jpg"
                  alt="Andressa Ferreira"
                  className="h-11 w-11 rounded-full border border-white object-cover"
                />
                <span className="text-sm font-medium">Andressa Ferreira</span>
              </div>

              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:underline">
                Ir para o Instagram →
              </span>
            </div>
          </a>

          {/* CARD 2 */}
          <a
            href="https://www.instagram.com/ateliehousedecor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[32rem] overflow-hidden rounded-2xl"
          >
            <img
              src="/images/live-desenvolvimento.jpeg"
              alt="Live Desenvolvimento HD"
              className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Live Desenvolvimento HD
              </h2>

              <p className="text-base text-gray-200 max-w-md mb-4">
                Venha desenvolver uma mente vencedora, uma palavra de atitude e
                encorajamento para as mulheres que desejam crescer em sabedoria.
              </p>

              <p className="text-sm text-gray-300 mb-6">
                Todas às quartas, às 16h
              </p>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/andressaProfile.jpg"
                  alt="Andressa Ferreira"
                  className="h-11 w-11 rounded-full border border-white object-cover"
                />
                <span className="text-sm font-medium">Andressa Ferreira</span>
              </div>

              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:underline">
                Ir para o Instagram →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
