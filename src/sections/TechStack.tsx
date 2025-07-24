import {
  SiPython,
  SiReact,
  SiTypescript,
  SiFlask,
  SiAwsamplify,
  SiGooglecloud,
  SiDocker,
  SiMysql,
  SiOracle,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";

const javaIcon = (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    className="w-5 h-5"
  />
);

const azureIcon = (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    className="w-5 h-5"
  />
);

const techs = [
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  {
    name: "Node.js",
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        className="w-5 h-5 inline-block"
      />
    ),
  },
  {
    name: "Flask",
    icon: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
  },
  { name: "Java", icon: javaIcon },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
  {
    name: "SQL",
    icon: (
      <img
        src="https://img.icons8.com/color/48/sql.png"
        className="w-5 h-5 inline-block"
      />
    ),
  },
  { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "AWS", icon: <SiAwsamplify className="text-orange-400" /> },
  { name: "Azure", icon: azureIcon },
  { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
];

function TechStack() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded shadow-sm"
          >
            <span className="text-xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
