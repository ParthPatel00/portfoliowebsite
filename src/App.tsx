import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About.tsx";
import Work from "./sections/Work.tsx";
import Projects from "./sections/Projects.tsx";
import Achievements from "./sections/Achievements.tsx";
import TechStack from "./sections/TechStack.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <section id="home">
          <About />
        </section>

        <section id="work" className="scroll-mt-14">
          <Work />
        </section>

        <section id="projects" className="scroll-mt-14">
          <Projects />
        </section>

        <section id="achievements" className="scroll-mt-14">
          <Achievements />
        </section>

        <section id="tech" className="scroll-mt-14">
          <TechStack />
        </section>

        <section id="contact" className="scroll-mt-14">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
