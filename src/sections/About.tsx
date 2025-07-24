import SectionHeader from "../components/SectionHeader";
import BackgroundBlob from "../components/BackgroundBlob";
function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="About Me" />
      {/* Background blob */}
      <BackgroundBlob className="-top-20 -left-24 w-72 h-72" />
      <BackgroundBlob
        className="-bottom-16 right-12 w-60 h-60"
        color="from-pink-500 via-yellow-500 to-orange-500"
      />

      {/* Actual content */}
      <div className="relative z-10">
        <p className="text-sm sm:text-base leading-relaxed">
          I'm <strong>Parth Patel</strong>, a software engineer based in San
          Jose, CA currently pursuing a Master’s in Software Engineering at San
          Jose State University, with a Bachelor of Science in Mathematics and
          Statistics from the University of Toronto.
        </p>
        <p className="text-sm sm:text-base leading-relaxed mt-5">
          My journey began with doing math competitions and led to earning a
          math degree. Along the way, I discovered a passion for coding—and I’ve
          never looked back. I find real joy in creating, problem-solving, and
          building software that’s not just functional, but also elegant and
          efficient. This is what excites me every day. I’d love to connect with
          like-minded individuals—feel free to reach out via{" "}
          <a
            href="https://linkedin.com/in/parth-patel-sjsu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="mailto:patelsparth00@gmail.com"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Email!
          </a>
        </p>
        <a
          href="/Resume_Parth.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2 text-white font-medium rounded-lg shadow bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-purple-500 hover:to-pink-500 transition-transform transform hover:scale-105"
        >
          📄 View Resume
        </a>
      </div>
    </section>
  );
}

export default About;
