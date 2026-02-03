export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/andressaperson.jpeg"
              alt="Andressa Ferreira"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Conheça Andressa Ferreira
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Andressa Ferreira, idealizadora da Maior Comunidade de Pintura e
                Mente do Brasil, é natural de Joinville/SC, possui formação em
                Direito, atuou no mercado financeiro por muitos anos até
                descobrir o seu maior propósito: inspirar e desenvolver mulheres
                a encontrarem satisfação pessoal e profissional através da
                pintura criativa em madeira.
              </p>

              <p>
                É a fundadora do <strong>Ateliê House Decor</strong> e
                idealizadora do <strong>Estilo Clean HD</strong>, um estilo
                desenvolvido e consolidado, que transformou o universo da
                pintura em madeira, resultando em peças atraentes que vendem o
                ano todo.
              </p>

              <p>
                Andressa Ferreira também é Mentora de artesãs em todo Brasil e
                países da América Latina, com um método de ensino único, que
                une: <strong>Tempo, Pintura e Mente</strong>, a consolidada
                técnica <strong>TPM</strong>.
              </p>

              <p className="font-medium text-gray-900">
                Quer conhecê-la melhor? Entre em contato e faça parte da Maior
                Comunidade de Pintura e Mente do Brasil.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/ateliehousedecor"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  rounded-md
                  bg-gradient-to-r from-yellow-400 to-yellow-500
                  hover:from-yellow-500 hover:to-yellow-600
                  px-6 py-3
                  text-sm font-semibold text-white
                  shadow-md transition-all
                "
              >
                Conhecer o Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
