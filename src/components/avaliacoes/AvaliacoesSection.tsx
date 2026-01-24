import AvaliacoesCarousel from "./AvaliacoesCarousel";

export default function AvaliacoesSection() {
  return (
    <section className="min-w-screen border-t border-b border-gray-400 px-5 py-16 md:py-24 text-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
            Depoimentos <br /> UniversoHD
          </h1>

          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-[#5b484a] ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-[#5b484a] ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-[#5b484a]"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-[#5b484a] ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#5b484a] ml-1"></span>
          </div>
        </div>

        <AvaliacoesCarousel />
      </div>
    </section>
  );
}
