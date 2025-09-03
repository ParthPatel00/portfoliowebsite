import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";
import awsLogo from "../assets/aws-color.svg";
import geminiLogo from "../assets/gemini-color.svg";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

// Icon map
const techIconMap: Record<string, React.ReactNode> = {
  React: <SiReact className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <SiPython className="text-yellow-500" />,
  "AWS Lambda": <img src={awsLogo} className="w-5 h-5 inline" />,
  S3: <img src={awsLogo} className="w-5 h-5 inline" />,
  DynamoDB: <img src={awsLogo} className="w-5 h-5 inline" />,
  "Gemini API": <img src={geminiLogo} className="w-5 h-5 inline" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  Supabase: <SiSupabase className="text-green-500" />,
  NumPy: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
      className="w-5 h-5 inline"
    />
  ),
  Matplotlib: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg"
      className="w-5 h-5 inline"
    />
  ),
  "scikit-learn": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      className="w-5 h-5 inline"
    />
  ),
  Pandas: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
      className="w-5 h-5 inline"
    />
  ),
  Seaborn: (
    <img
      src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg"
      className="w-5 h-5 inline"
    />
  ),
};

// Your projects
const projects = [
  {
    name: "TenMunches",
    description:
      "Discover AI-curated food & drink recommendations across 20 categories in San Francisco. This platform uncovers hidden gems by analyzing 10,000+ Google reviews and 200+ food articles. Using a custom Python NLP pipeline, it surfaces top spots via sentiment analysis of real testimonials.",
    live: "https://ten-munches.vercel.app/",
    github: "https://github.com/ParthPatel00/TenMunches",
    stack: ["React", "TypeScript", "Python", "PostgreSQL", "Supabase"],
    category: "Full Stack",
    featured: true,
    image: "🍽️",
  },
  {
    name: "QuizMaster",
    description:
      "An AI-powered quiz generator where users upload PDFs and get auto-generated quizzes using Google Gemini. Includes quiz history, auth, and file storage.",
    live: "https://quiz-master-parth-patels-projects-e3c16659.vercel.app/",
    github: "https://github.com/ParthPatel00/QuizMaster",
    stack: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Gemini API",
      "Firebase",
    ],
    category: "AI/ML",
    featured: true,
    image: "🧠",
  },
  {
    name: "Number Recognition with Neural Network",
    description:
      "A neural net built from scratch to recognize handwritten digits using the MNIST dataset. Includes forward/backpropagation and evaluation tools.",
    github:
      "https://github.com/ParthPatel00/Number-Recognition-using-Artificial-Neural-Network-Classifier",
    stack: ["Python", "NumPy", "Matplotlib"],
    category: "AI/ML",
    featured: false,
    image: "🔢",
  },
  {
    name: "Amazon Book Review Classification",
    description:
      "Classifies Amazon reviews into positive/negative using text processing (TF-IDF) and ML models like SVM, Logistic Regression.",
    github:
      "https://github.com/ParthPatel00/Amazon-Book-Customer-Review-Classification",
    stack: ["Python", "scikit-learn", "Pandas"],
    category: "AI/ML",
    featured: false,
    image: "📚",
  },
  {
    name: "Neighborhood Business Classification",
    description:
      "Predicts neighborhood business type using geolocation and ML clustering models. Uses exploratory data viz and spatial features.",
    github:
      "https://github.com/ParthPatel00/Neighborhood-Business-Classification-Model",
    stack: ["Python", "scikit-learn", "Seaborn", "Matplotlib"],
    category: "Data Science",
    featured: false,
    image: "🏢",
  },
];

function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack":
        return "bg-slate-700 text-slate-200";
      case "AI/ML":
        return "bg-emerald-900 text-emerald-200";
      case "Data Science":
        return "bg-slate-600 text-slate-200";
      default:
        return "bg-slate-800 text-slate-300";
    }
  };

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader text="Featured Projects" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((proj) => proj.featured)
            .map((proj) => (
              <motion.div
                key={proj.name}
                variants={cardVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-slate-800/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group-hover:scale-102 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{proj.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {proj.name}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            proj.category
                          )}`}
                        >
                          {proj.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {proj.live && (
                        <motion.a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-emerald-600/50 text-emerald-200 rounded-lg hover:bg-emerald-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={16} />
                        </motion.a>
                      )}
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-600/50 text-emerald-200 rounded-lg hover:bg-emerald-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-lg flex-grow">
                    {proj.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 flex items-center gap-2 mb-3">
                      <FaCode className="text-slate-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.stack.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 bg-slate-700/30 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700/50 transition-colors"
                        >
                          {techIconMap[tech] ?? ""}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaRocket className="text-slate-400" />
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((proj) => !proj.featured)
              .map((proj) => (
                <motion.div
                  key={proj.name}
                  variants={cardVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-slate-800/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-lg p-6 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300 group-hover:scale-102 h-full flex flex-col">
                    {/* Project Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{proj.image}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">
                          {proj.name}
                        </h4>
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            proj.category
                          )}`}
                        >
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                      {proj.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {proj.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1 px-2 py-1 bg-slate-700/30 text-slate-300 rounded-lg text-xs"
                        >
                          {techIconMap[tech] ?? ""}
                          <span>{tech}</span>
                        </span>
                      ))}
                      {proj.stack.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700/30 text-slate-400 rounded-lg text-xs">
                          +{proj.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-auto">
                      {proj.live && (
                        <motion.a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-700/30 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt size={12} />
                          Live
                        </motion.a>
                      )}
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-700/30 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub size={12} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
