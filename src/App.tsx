import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About.tsx";
import TechStack from "./sections/TechStack.tsx";
import Work from "./sections/Work.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors scroll-smooth">
      <Navbar />
      <main className="... space-y-20">
        <section id="about" className="scroll-mt-24 mt-20">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>
        <section id="tech" className="scroll-mt-24">
          <FadeInSection>
            <TechStack />
          </FadeInSection>
        </section>
        <section id="work" className="scroll-mt-24">
          <FadeInSection>
            <Work />
          </FadeInSection>
        </section>
        <section id="projects" className="scroll-mt-24">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </section>
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
