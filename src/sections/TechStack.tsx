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
      level: "Expert",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Expert",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: "Expert",
    },
    {
      name: "C/C++",
      icon: <SiCplusplus className="text-blue-700" />,
      level: "Advanced",
    },
    {
      name: "Java",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          className="w-5 h-5 inline max-w-full object-contain"
        />
      ),
      level: "Intermediate",
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-600" />,
      level: "Expert",
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
      level: "Expert",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
      level: "Advanced",
    },
  ],
  Backend: [
    {
      name: "Flask",
      icon: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
      level: "Expert",
    },
    {
      name: "Node.js",
      icon: <SiJavascript className="text-green-500" />,
      level: "Advanced",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" />,
      level: "Expert",
    },
    {
      name: "Azure",
      icon: <img src={azureLogo} className="w-5 h-5 inline" />,
      level: "Advanced",
    },
    {
      name: "GCP",
      icon: <SiGooglecloud className="text-blue-400" />,
      level: "Intermediate",
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-500" />,
      level: "Expert",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
      level: "Advanced",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-green-500" />,
      level: "Advanced",
    },
  ],
  Databases: [
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
      level: "Expert",
    },
    {
      name: "Oracle",
      icon: <SiOracle className="text-red-600" />,
      level: "Advanced",
    },
    {
      name: "DynamoDB",
      icon: <FaAws className="text-orange-500" />,
      level: "Advanced",
    },
    {
      name: "PostgreSQL",
      icon: <SiMysql className="text-blue-500" />,
      level: "Advanced",
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-slate-500/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl"
        />
      </div>

      <SectionHeader text="Tech Stack" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.4,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mt-16 relative z-10"
      >
        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, items]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1.2,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "center center" }}
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
                  {items.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + index * 0.03,
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        duration: 1.0,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className="group/tech relative bg-slate-700/50 backdrop-blur-sm rounded-xl p-3 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer"
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
