import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About.tsx";
import TechStack from "./sections/TechStack.tsx";
import Work from "./sections/Work.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Force dark mode regardless of system preference
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white transition-colors scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="work" className="scroll-mt-24">
          <Work />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="tech" className="scroll-mt-24">
          <TechStack />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
