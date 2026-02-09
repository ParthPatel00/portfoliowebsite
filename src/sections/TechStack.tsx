import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlask,
  SiDocker,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiCplusplus,
  SiNextdotjs,
  SiGooglecloud,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import azureLogo from "../assets/azure-2.svg";
import geminiLogo from "../assets/gemini-color.svg";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const categories = {
  Languages: [
    {
      name: "Python",
      icon: <SiPython className="text-yellow-500" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
    },
    {
      name: "C/C++",
      icon: <SiCplusplus className="text-blue-700" />,
    },
    {
      name: "Java",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          className="w-5 h-5 inline max-w-full object-contain"
        />
      ),
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-600" />,
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
    },
  ],
  Backend: [
    {
      name: "Flask",
      icon: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
    },
    {
      name: "Node.js",
      icon: <SiJavascript className="text-green-500" />,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" />,
    },
    {
      name: "Azure",
      icon: <img src={azureLogo} className="w-5 h-5 inline" />,
    },
    {
      name: "GCP",
      icon: <SiGooglecloud className="text-blue-400" />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-500" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-green-500" />,
    },
  ],
  Databases: [
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
    },
    {
      name: "Oracle",
      icon: <SiOracle className="text-red-600" />,
    },
    {
      name: "DynamoDB",
      icon: <FaAws className="text-orange-500" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiMysql className="text-blue-500" />,
    },
  ],
  "AI & APIs": [
    {
      name: "ChatGPT API",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          className="w-5 h-5 inline"
        />
      ),
      level: "Expert",
    },
    {
      name: "Gemini API",
      icon: <img src={geminiLogo} className="w-5 h-5 inline" />,
      level: "Expert",
    },
  ],
};

function TechStack() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <SectionHeader text="Tech Stack" />

      <div className="mt-16 relative z-10">
        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, items], cardIndex) => (
            <motion.div
              key={category}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: cardIndex * 0.1,
                ease: "easeOut",
              }}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              {/* macOS Window Header */}
              <div className="bg-slate-600/80 border-b border-slate-500/60 px-4 py-3 flex items-center gap-3">
                {/* Traffic Light Buttons */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                </div>

                {/* Window Title */}
                <div className="flex-1 text-center">
                  <span className="text-slate-200 text-sm font-medium">
                    {category}
                  </span>
                </div>

                {/* Spacer for symmetry */}
                <div className="w-12"></div>
              </div>

              {/* Window Content */}
              <div className="p-6">
                {/* Technologies Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/tech relative bg-slate-700/50 backdrop-blur-sm rounded-xl p-3 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-0.5"
                    >
                      {/* Tech Icon and Name */}
                      <div className="flex items-center gap-3">
                        <div className="text-lg group-hover/tech:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <span className="text-slate-300 font-medium text-sm truncate">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
