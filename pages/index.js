import SEO            from "../components/SEO";
import Navbar         from "../components/Navbar";
import Hero           from "../components/Hero";
import TopicSection   from "../components/TopicSection";
import ResumenSection from "../components/ResumenSection";
import FuentesSection from "../components/FuentesSection";
import Footer         from "../components/Footer";

import { tema1, tema2, tema3, tema4, fuentes } from "../data/content";

const temas = [tema1, tema2, tema3, tema4];

export default function Home() {
  return (
    <>
      <SEO />

      {/* Navbar fija */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        {/* Sección Hero */}
        <Hero />

        {/* Subtemas */}
        {temas.map((tema, i) => (
          <TopicSection key={tema.id} tema={tema} index={i} />
        ))}

        {/* Conceptos transversales + línea de tiempo */}
        <ResumenSection />

        {/* Fuentes bibliográficas */}
        <FuentesSection fuentes={fuentes} />
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}
