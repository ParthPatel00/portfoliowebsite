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
  SiNodedotjs,
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
  ],
  Frontend: [{ name: "React", icon: <SiReact className="text-cyan-400" /> }],
  Backend: [
    {
      name: "Flask",
      icon: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
    },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
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
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="Tech Stack" />
      <motion.div className="space-y-4 w-full">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap justify-center gap-5">
              {items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded shadow-sm text-sm"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStack;
