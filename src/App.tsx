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
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="... relative overflow-hidden space-y-20">
        <BackgroundBlob className="absolute -top-15 -left-30 w-72 h-72" />
        <section id="about" className="scroll-mt-24 mt-20">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute top-125 -right-30 w-60 h-60"
          color="from-pink-500 via-yellow-500 to-orange-500"
        />
        <section id="tech" className="scroll-mt-24">
          <FadeInSection>
            <TechStack />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="absolute top-250 left-45 w-30 h-40"
          color="from-green-400 via-green-500 to-blue-500"
        />
        <BackgroundBlob
          className="absolute bottom-300 right-15 w-70 h-70"
          color="from-pink-400 via-red-500 to-white-500"
        />
        <section id="work" className="scroll-mt-24">
          <FadeInSection>
            <Work />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="bottom-170 left-50 w-80 h-80"
          color="from-purple-400 via-white-500 to-white-500"
        />
        <BackgroundBlob
          className="bottom-100 -right-30 w-100 h-100"
          color="from-blue-400 via-cyan-500 to-blue-500"
        />
        <section id="projects" className="scroll-mt-24">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </section>
        <BackgroundBlob
          className="-bottom-40 -left-30 w-100 h-100"
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
