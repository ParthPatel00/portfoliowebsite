import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 text-lg text-slate-400 font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Hello, I'm</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Parth</span>
              <span className="block text-slate-300">Patel</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200">
              Software Engineer & AI Researcher
            </h2>
            <div className="flex items-center gap-2 text-slate-400">
              <FaMapMarkerAlt className="text-slate-500" />
              <span>San Jose, CA</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate software engineer currently pursuing a Master's
              in Software Engineering at
              <span className="text-emerald-400 font-semibold">
                {" "}
                San Jose State University
              </span>
              , with a Bachelor of Science in Mathematics and Statistics from
              the University of Toronto.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey from math competitions to software engineering has
              taught me the power of
              <span className="text-slate-200 font-semibold">
                {" "}
                elegant problem-solving
              </span>{" "}
              and
              <span className="text-emerald-400 font-semibold">
                {" "}
                systematic innovation
              </span>
              . I love building software that's not just functional, but also
              robust and maintainable.
            </p>
          </motion.div>

          {/* Education & Current Role */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-slate-400 text-xl" />
                <h3 className="font-semibold text-slate-200">Education</h3>
              </div>
              <p className="text-sm text-slate-300">MS Software Engineering</p>
              <p className="text-xs text-slate-400">
                San Jose State University
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-2">
                <FaCode className="text-emerald-400 text-xl" />
                <h3 className="font-semibold text-slate-200">Current Role</h3>
              </div>
              <p className="text-sm text-slate-300">AI Research Assistant</p>
              <p className="text-xs text-slate-400">SJSU Research Foundation</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="Resume_Parth.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-slate-800 border border-slate-600 rounded-lg font-semibold text-white overflow-hidden hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Resume
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.a
              href="https://github.com/ParthPatel00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/parth-patel-sjsu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:patelsparth00@gmail.com"
              className="p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-96 max-w-md mx-auto">
            {/* Hero Image - Seamlessly blended */}
            <img
              src="/hero-character.png"
              alt="Professional developer at work"
              className="w-full h-full object-contain drop-shadow-2xl"
            />

            {/* Subtle floating particles around the image */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 w-1 h-1 bg-slate-500 rounded-full opacity-30 animate-pulse"></div>
              <div
                className="absolute top-1/3 left-4 w-1 h-1 bg-emerald-500 rounded-full opacity-25 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-6 w-1 h-1 bg-slate-400 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
