import SectionHeader from "../components/SectionHeader";

function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="About Me" />

      <p className="text-sm sm:text-base leading-relaxed">
        I'm <strong>Parth Patel</strong>, a software engineer based in San Jose,
        CA with a Master’s in Software Engineering from San Jose State
        University and a Bachelor of Science in Mathematics and Statistics from
        the University of Toronto.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        I’m passionate about building intelligent, scalable software systems and
        currently specialize in full-stack web development and machine learning
        applications. I enjoy crafting impactful products and continuously
        improving my engineering skills.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        Let’s build something awesome together!
      </p>

      <a
        href="/Resume_Parth.pdf"
        download
        className="inline-block mt-6 px-5 py-2 text-white font-medium rounded-lg shadow bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-purple-500 hover:to-pink-500 transition-transform transform hover:scale-105"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default About;
