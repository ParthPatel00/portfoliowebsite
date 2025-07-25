import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiReact, SiTypescript, SiPython, SiFirebase } from "react-icons/si";
import awsLogo from "../assets/aws-color.svg";
import geminiLogo from "../assets/gemini-color.svg";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
const techIconMap: Record<string, React.ReactNode> = {
  React: <SiReact className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <SiPython className="text-yellow-500" />,
  "AWS Lambda": <img src={awsLogo} className="w-5 h-5 inline" />,
  S3: <img src={awsLogo} className="w-5 h-5 inline" />,
  DynamoDB: <img src={awsLogo} className="w-5 h-5 inline" />,
  "Gemini API": <img src={geminiLogo} className="w-5 h-5 inline" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
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

const projects = [
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
  },
  {
    name: "Number Recognition with Neural Network",
    description:
      "A neural net built from scratch to recognize handwritten digits using the MNIST dataset. Includes forward/backpropagation and evaluation tools.",
    github:
      "https://github.com/ParthPatel00/Number-Recognition-using-Artificial-Neural-Network-Classifier",
    stack: ["Python", "NumPy", "Matplotlib"],
  },
  {
    name: "Amazon Book Review Classification",
    description:
      "Classifies Amazon reviews into positive/negative using text processing (TF-IDF) and ML models like SVM, Logistic Regression.",
    github:
      "https://github.com/ParthPatel00/Amazon-Book-Customer-Review-Classification",
    stack: ["Python", "scikit-learn", "Pandas"],
  },
  {
    name: "Neighborhood Business Classification",
    description:
      "Predicts neighborhood business type using geolocation and ML clustering models. Uses exploratory data viz and spatial features.",
    github:
      "https://github.com/ParthPatel00/Neighborhood-Business-Classification-Model",
    stack: ["Python", "scikit-learn", "Seaborn", "Matplotlib"],
  },
];

function Projects() {
  return (
    <section className="relative overflow-hidden w-full">
      <SectionHeader text="Projects" />

      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.name}
            className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Top Row: Title + Links */}
            <div className="flex items-center justify-between flex-wrap gap-y-2">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <div className="space-x-4 text-sm">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition cursor-pointer flex items-center gap-2 pb-1"
                  >
                    Live <FaExternalLinkAlt size={12} />
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition cursor-pointer flex items-center gap-2"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>

            {/* Project Description and Tech Stack */}
            <div className="mt-2">
              <p className="text-sm leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-3 text-sm">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                  >
                    {techIconMap[tech] ?? ""} <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
