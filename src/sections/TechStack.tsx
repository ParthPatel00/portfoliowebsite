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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import azureLogo from "../assets/azure-2.svg";
import geminiLogo from "../assets/gemini-color.svg";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const categories = {
  Languages: [
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
    {
      name: "Java",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          className="w-5 h-5 inline max-w-full object-contain"
        />
      ),
    },
  ],
  Frontend: [{ name: "React", icon: <SiReact className="text-cyan-400" /> }],
  Backend: [
    {
      name: "Flask",
      icon: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          className="w-5 h-5 inline max-w-full object-contain"
        />
      ),
    },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Azure", icon: <img src={azureLogo} className="w-3 h-3 inline" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
    { name: "DynamoDB", icon: <FaAws className="text-orange-500" /> },
  ],
  APIs: [
    {
      name: "ChatGPT API",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          className="w-5 h-5 inline"
        />
      ),
    },
    {
      name: "Gemini API",
      icon: <img src={geminiLogo} className="w-5 h-5 inline" />,
    },
  ],
};

function TechStack() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4">
      <SectionHeader text="Tech Stack" />

      <div className="relative flex flex-wrap justify-center gap-6 mt-10">
        {Object.entries(categories).map(([category, items], index) => (
          <motion.div
            key={category}
            animate={{ y: [0, -35, 0] }}
            transition={{
              duration: 2.5 + (index % 3),
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-zinc-100 dark:bg-zinc-800 flex flex-col justify-center items-center text-sm p-4 shadow-lg transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
            style={{
              transform: `translateX(${
                (index % 2 === 0 ? -1 : 1) * (index * 10)
              }px)`,
            }}
          >
            <h3 className="font-semibold text-xl mb-5">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700 text-lg"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
