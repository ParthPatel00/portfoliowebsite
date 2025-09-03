import SectionHeader from "../components/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Tech icon mapping
const techIconMap: Record<string, React.ReactNode> = {
  Python: <SiPython className="text-yellow-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <SiReact className="text-cyan-400" />,
  Flask: <SiFlask className="text-zinc-600 dark:text-zinc-300" />,
  Docker: <SiDocker className="text-blue-500" />,
  MySQL: <SiMysql className="text-blue-600" />,
  Oracle: <SiOracle className="text-red-600" />,
  AWS: <FaAws className="text-orange-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  ShadCN: <div className="w-4 h-4 bg-slate-600 rounded"></div>,
  Recharts: <div className="w-4 h-4 bg-blue-500 rounded"></div>,
};

interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  achievements: string[];
  technologies: string[];
}

function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const workExperiences: WorkExperience[] = [
    {
      id: "1",
      title: "AI Research Assistant",
      company: "San Jose State University Research Foundation",
      location: "San Jose, CA",
      startDate: "May 2025",
      endDate: "Present",
      isCurrent: true,
      achievements: [
        "Built AI feedback system analyzing 20,000+ coding assignments for 300+ students across 8 classes with 2-second response time.",
        "Delivered 5 production releases with 100% success rate using dockerized inference API on AWS EC2.",
      ],
      technologies: [
        "Python",
        "TypeScript",
        "AWS",
        "MySQL",
        "Flask",
        "React",
        "Docker",
      ],
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "Deloitte",
      location: "Montreal, Canada",
      startDate: "Jul 2022",
      endDate: "Oct 2024",
      isCurrent: false,
      achievements: [
        "Accelerated vaccine reporting by 5x for 3 provincial health teams using Python/Flask APIs on AWS.",
        "Improved query performance by 20% and reduced ticket handling by 2+ hours through optimized MongoDB models and JavaScript automation.",
        "Awarded Deloitte Silver Dot Award for exceptional performance in Agile cross-functional team.",
      ],
      technologies: [
        "Python",
        "Flask",
        "AWS",
        "React",
        "TypeScript",
        "MongoDB",
        "JavaScript",
        "ShadCN",
        "Recharts",
      ],
    },
  ];

  const getTimelineMarkers = () => {
    const markers = [];
    const currentYear = new Date().getFullYear();
    const startYear = 2022;

    for (let year = startYear; year <= currentYear; year++) {
      markers.push(
        <div
          key={year}
          className="absolute left-0 w-2 h-2 bg-slate-500 rounded-full transform -translate-x-1/2"
          style={{
            top: `${((currentYear - year) / (currentYear - startYear)) * 100}%`,
          }}
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xs text-slate-400 font-medium">
            {year}
          </div>
        </div>
      );
    }
    return markers;
  };

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader text="Work Experience" />

      <div ref={containerRef} className="relative mt-16">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 bg-emerald-500"></div>

        {/* Progress Dot */}
        <motion.div
          className="absolute left-8 md:left-1/2 w-4 h-4 bg-slate-400 rounded-full border-2 border-white dark:border-slate-900 shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 z-10"
          style={{ top: dotPosition }}
        />

        {/* Grey Progress Line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 w-0.5 transform md:-translate-x-1/2 bg-slate-400"
          style={{ height: dotPosition }}
        />

        {/* Timeline Markers */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2">
          {getTimelineMarkers()}
        </div>

        {/* Work Experience Items */}
        <div className="space-y-16">
          {workExperiences.map((work, index) => (
            <motion.div
              key={work.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-slate-600 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="bg-slate-800/30 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-700/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {work.title}
                      </h3>
                      <p className="text-lg font-semibold text-emerald-400">
                        {work.company}
                      </p>
                      <p className="text-sm text-slate-400">{work.location}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <span className="inline-block bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                        {work.startDate} – {work.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {work.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-400 leading-relaxed flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-slate-700/30 text-slate-300 rounded-lg text-xs font-medium"
                        >
                          {techIconMap[tech] || (
                            <div className="w-4 h-4 bg-slate-500 rounded"></div>
                          )}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
