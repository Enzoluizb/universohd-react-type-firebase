export default function CleanHDSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Estilo Clean HD
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                O estilo <strong>“Clean HD”</strong> é um estilo de pintura
                desenvolvido e consolidado pelo Ateliê House Decor®. É uma forma
                de pensar pintura criativa em madeira, trabalhando primeiro a
                mente do artesão, e busca desenvolver uma pintura leve,
                retratando com clareza a consciência do autor em suas obras, de
                maneira minimalista e essencial.
              </p>

              <p>
                Tem como inspirações os estilos Minimalista, Contemporâneo,
                Cottage e Farmhouse.
              </p>

              <p>
                A premissa do estilo Clean HD é que{" "}
                <strong>“menos é mais”</strong>, e isso encontramos em cada
                combinação, tanto nos acessórios quanto nas técnicas escolhidas
                para composição das coleções.
              </p>

              <p>
                O estilo “Clean HD” possui uma paleta de cores principal,
                composta pelo off White, amadeirado, preto e marrom. Já na
                paleta secundária, acrescentam-se cores conforme cada coleção,
                com predominância de tons pastéis e terrosos.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <img
              src="/images/cleanHD.jpg"
              alt="Estilo Clean HD"
              className="
                w-full max-w-md
                h-[520px]
                rounded-xl
                shadow-lg
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
