function About() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4 leading-relaxed">
        I'm <strong>Parth Patel</strong>, a software engineer based in San Jose,
        CA with a Master’s in Software Engineering from San Jose State
        University and a Bachelor of Science in Mathematics and Statistics from
        the University of Toronto.
      </p>
      <p className="mb-4 leading-relaxed">
        I’m passionate about building intelligent, scalable software systems and
        currently specialize in full-stack web development and machine learning
        applications. I enjoy crafting impactful products and continuously
        improving my engineering skills.
      </p>
      <p className="leading-relaxed">Let’s build something awesome together!</p>
      <a
        href="/Resume_Parth.pdf"
        download
        className="inline-block mt-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow hover:scale-105 transition-transform"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default About;
