import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProgramsSection from "../sections/ProgramsSection";
import AboutSection from "../sections/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="programs">
          <ProgramsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
