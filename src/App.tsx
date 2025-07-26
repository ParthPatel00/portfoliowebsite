import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About.tsx";
import TechStack from "./sections/TechStack.tsx";
import Work from "./sections/Work.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import FadeInSection from "./components/FadeInSection";
import BackgroundBlob from "./components/BackgroundBlob.tsx";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Force dark mode regardless of system preference
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="... relative overflow-hidden space-y-20">
        <BackgroundBlob className="absolute -top-[120px] -left-[100px] w-[288px] h-[288px] z-0" />

        <section id="about" className="scroll-mt-24 mt-20">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute top-[500px] -right-[120px] w-[300px] h-[300px] z-0"
          color="from-pink-500 via-yellow-500 to-orange-500"
        />

        <section id="tech" className="scroll-mt-24">
          <FadeInSection>
            <TechStack />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute top-[1000px] left-[180px] w-[120px] h-[160px] z-0"
          color="from-green-400 via-green-500 to-blue-500"
        />

        <BackgroundBlob
          className="absolute bottom-[1200px] right-[60px] w-[280px] h-[280px] z-0"
          color="from-pink-400 via-red-500 to-white"
        />

        <section id="work" className="scroll-mt-24">
          <FadeInSection>
            <Work />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute bottom-[680px] left-[200px] w-[320px] h-[320px] z-0"
          color="from-yellow-500 via-green-300 to-yellow-500"
        />

        <BackgroundBlob
          className="absolute bottom-[400px] -right-[120px] w-[300px] h-[300px] z-0"
          color="from-blue-500 via-green-300 to-yellow-300"
        />

        <section id="projects" className="scroll-mt-24">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute -bottom-[160px] -left-[120px] w-[400px] h-[400px] z-0"
          color="from-blue-400 via-red-500 to-blue-500"
        />

        <section id="contact" className="scroll-mt-24 mb-20">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
