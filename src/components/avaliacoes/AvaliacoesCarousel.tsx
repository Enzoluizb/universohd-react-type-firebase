import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import AvaliacaoCard from "./AvaliacaoCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const avaliacoes = [
  {
    nome: "@Viviantheisen – Master MindHD 2026",
    texto:
      "Ser aluna HD é uma transformação não só na arte da pintura, mas também no pessoal! Somos direcionadas ao nosso propósito e evolução constante!",
  },
  {
    nome: "@Dineidemarcon – Aluna HD 2026",
    texto:
      "Viver o artesanato de ser uma aluna HD é viver a arte de amar tudo o que aprendemos e pintamos nessa comunidade!",
  },
  {
    nome: "@Monikcadiniz – Embaixadora HD sênior 2026",
    texto:
      "Ser uma aluna HD é uma escolha de vida, querer ir além e estar conectada com o mundo da decoração... poder desfrutar do processo com prazer e confiança da entrega. Venha extrair o seu melhor aqui no @ateliehousedecor #embaixadorahdsenior 👑🔥🤎🚀🎯✨️",
  },
  {
    nome: "@Monikcadiniz – Embaixadora HD sênior 2026",
    texto:
      "Ser uma aluna HD é além de peças estilosas, é uma troca incrível e muitas experiências. Gratidão @ateliehousedecor por todo direcionamento, paciência, zelo, dedicação e acima de tudo a persistência em extrair nossa melhor versão.",
  },
  {
    nome: "@Rubianmessias – Master MindHD 2026",
    texto:
      "Mais do que isso é viver uma transformação não só no profissional, mas no pessoal, familiar e principalmente espiritualmente. Nascemos para servir e servimos com o nosso trabalho, levando o nosso amor para dentro dos lares através do artesanato. Amo esse universo ❤️🙌 #especialistahd #soualunahd",
  },
  {
    nome: "@gorettimesquitaartesanato – Embaixadora HD 2026",
    texto:
      "Ser Aluna HD é acreditar na transformação. É transformar madeira em arte e sonhos em realidade.",
  },
  {
    nome: "@gorettimesquitaartesanato – Embaixadora HD 2026",
    texto:
      "O Universo HD foi uma redescoberta na forma de como via o artesanato, pois pude perceber a grandiosidade da arte na minha vida. Obrigada a Deus por me permitir descobrir a Andressa nessa minha caminhada. Estarei sempre segurando na tua mão e seguindo firme no propósito de Deus.",
  },
  {
    nome: "@quelleartedecor – Master MindHD 2026",
    texto:
      "Ser aluna HD é estar em crescimento e aprendizado constante. É estar por dentro das tendências atuais de decoração. É caminhar acompanhada da melhor Professora de Pintura e Mente Criativa e das melhores Artesãs e Amigas que o mundo do artesanato pode lhe oferecer! É ganhar uma família que acolhe, incentiva e torce umas pelas outras! É nunca mais se sentir sozinho e saber que tem um monte de gente feliz com o seu sucesso! ❤️",
  },
  {
    nome: "@ro_artesa_homedecor – Aluna HD 2026",
    texto:
      "Ser aluna HD é acreditar que podemos crescer de várias formas, no profissional e na mente com conhecimento. É transformar peças em decoração que traz aconchego, elegância e bem-estar. Um processo de prazer, confiança e certeza de que foi a melhor escolha. @ateliehousedecor #alunahd",
  },
  {
    nome: "@eunice.vidal – Embaixadora HD 2026",
    texto: "O aprendizado é imenso, pra vida! 👏❤️",
  },
  {
    nome: "@danihoelzle.homedecor – Embaixadora HD 2026",
    texto:
      "É compreender que podemos ser mais e melhores no que quisermos. Podemos ser empreendedoras, criadoras, professoras, podemos acreditar em nós mesmas, na arte e em qualquer segmento da nossa vida ❤️",
  },
  {
    nome: "@rackelsilveira – Embaixadora HD sênior 2026",
    texto:
      "Fazer parte do Universo HD é um diferencial importante na minha vida pessoal e profissional. É sobre compartilhar, dar suporte, descobrir propósito, perseverar e crescer. Sou mais FELIZ por ser Aluna HD e hoje, como Embaixadora HD, vivo a TRANSFORMAÇÃO do processo necessário para vencer. Sou Rackel Silveira, a ARTESÃ com muito ORGULHO! ❤️",
  },
  {
    nome: "@coisasdatati.farmhouse – Embaixadora HD sênior 2026",
    texto:
      "É uma honra fazer parte do Universo HD! Uma caminhada de aprendizado em empreendedorismo, pintura, vendas e crescimento pessoal. Hoje posso transbordar na vida de pessoas com o mesmo propósito. Obrigada Andressa por acreditar em cada uma de nós! Gratidão! 🤎",
  },
  {
    nome: "@claudia_albano_atelie_criativo – Embaixadora HD 2026",
    texto:
      "Estar no Universo HD é ter uma nova perspectiva de vida e negócio! É enxergar oportunidades, renovar-se a cada dia, entender o propósito e alcançar objetivos!",
  },
  {
    nome: "@solsantosartefatto – Embaixadora HD sênior 2026",
    texto:
      "O Universo HD mudou minha forma de ver o artesanato e minha vida profissional. Descobri potencialidades que não conhecia em mim. Gratidão a Deus e ao @ateliehousedecor por tantas oportunidades. Somos Mulheres Empreendedoras 🤍🤎🤍",
  },
  {
    nome: "@inspirarti.homedecor – Embaixadora HD sênior 2026",
    texto:
      "Universo HD foi um divisor de águas! Passei por todas as etapas e que orgulho desse processo. Técnica TPM (Tempo, Pintura e Mente), muito aprendizado e crescimento pessoal, espiritual e profissional. Andressa, você é incrível! Gratidão por fazer parte da minha vida.",
  },
  {
    nome: "Rosângela Maria Ateliê – Master MindHD 2026",
    texto:
      "O Universo HD me fez ver novos rumos. Após 37 anos na saúde, sou imensamente grata à Andressa por nos ajudar a realizar sonhos na pintura criativa e, principalmente, na vida.",
  },
];

export default function AvaliacoesCarousel() {
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* SETAS */}
      <div className="swiper-prev" />
      <div className="swiper-next" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        pagination
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6 md:px-12"
      >
        {avaliacoes.map((item, index) => (
          <SwiperSlide key={index}>
            <AvaliacaoCard nome={item.nome} texto={item.texto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
