import { ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: "/images/1.png",
    title: "Reflexões inspiradoras",
    description: "Para fortalecer sua mente, seu coração e sua caminhada.",
  },
  {
    icon: "/images/2.png",
    title: "Histórias e aprendizados",
    description: "Da minha jornada à frente do Ateliê House Decor.",
  },
  {
    icon: "/images/3.png",
    title: "Desenvolvimento pessoal e profissional",
    description: "Ferramentas e insights para crescer com propósito.",
  },
  {
    icon: "/images/5.png",
    title: "O valor do lar, da criatividade e do propósito",
    description: "Porque é em casa que grandes sonhos ganham vida.",
  },
  {
    icon: "/images/4.png",
    title: "Inspiração para transformar sua paixão em oportunidade",
    description: "Acredite, você pode ir mais longe!",
  },
];

export default function BookSection() {
  return (
    <section>
      <div className="w-full">
        <div className="grid overflow-hidden shadow-[0_24px_80px_rgba(99,72,58,0.12)] lg:grid-cols-[33fr_67fr]">
          <div className="relative min-h-[420px] lg:min-h-[860px]">
            <img
              src="/images/capa%20livro.png"
              alt="Capa do livro O Prazer de Estar em Casa"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(248,240,233,0.95)_35%,_rgba(244,233,224,1)_100%)]">
            <div className="flex h-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[860px] lg:px-14">
              <div>
                <div className="mb-16 rounded-[2rem] bg-gradient-to-r from-[#db7458] via-[#df7e62] to-[#d96f54] px-6 py-8 text-center sm:px-10 sm:py-10">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Conheça nosso primeiro livro
                  </h2>
                </div>

                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-5">
                  {highlights.map((item) => (
                    <div key={item.title} className="text-center">
                      <div className="mb-6 flex h-28 items-center justify-center">
                        <img
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-32 w-32 bg-transparent object-contain mix-blend-multiply"
                        />
                      </div>
                      <h3 className="text-xl font-semibold leading-snug text-[#4f403d]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-[#73605b]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 border-t border-[#f0e2dc] pt-12 text-center">
                <p className="text-xl text-[#73605b]">
                  Se você acredita que o artesanato pode transformar vidas,
                </p>
                <p className="mt-4 text-4xl font-medium italic text-[#6c534e]">
                  este livro foi escrito para você.
                </p>

                <a
                  href="https://a.co/d/0cg00x7Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-[#4f9d69] px-12 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#42875a] lg:min-h-20 lg:px-16 lg:py-5 lg:text-lg"
                >
                  <span>Quero meu exemplar</span>
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
