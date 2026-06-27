import Hero from "../components/landing/Hero";
import BookSection from "../components/landing/BookSection";
import AboutSection from "../components/landing/AboutSection";
import CleanHDSection from "../components/landing/CleanHDSection";
import CoursesSection from "../components/landing/CoursesSection";
import AvaliacoesSection from "../components/avaliacoes/AvaliacoesSection";
import CardsInstagram from "../components/landing/CardsInstagramSection";
import EncontroSection from "../components/landing/EncontroSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BookSection />
      <AboutSection />
      <CleanHDSection />
      <CoursesSection />
      <AvaliacoesSection />
      <CardsInstagram />
      <EncontroSection />
    </>
  );
}
