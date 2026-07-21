import { motion } from "framer-motion";
import type { Project } from "../data/types";
import { viewportOnce } from "../lib/motion";
import BenchmarkBars from "./BenchmarkBars";
import { ScoutTerminal } from "./TerminalMock";

function ProjectMedia({ project }: { project: Project }) {
  const { media } = project;
  if (media.type === "bench") return <BenchmarkBars />;
  if (media.type === "terminal") return <ScoutTerminal />;
  if (media.srcSet && media.srcSet.length > 1) {
    return (
      <div className="flex items-stretch justify-center gap-3">
        {media.srcSet.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${media.alt}, screen ${i + 1}`}
            loading="lazy"
            width={480}
            height={1041}
            className="w-1/3 min-w-0 border-2 border-ink object-cover shadow-hard-sm"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="border-2 border-ink bg-ink shadow-hard">
      <div className="flex items-center gap-2 border-b border-paper/20 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
      </div>
      <img
        src={media.src}
        alt={media.alt ?? project.name}
        loading="lazy"
        width={1568}
        height={696}
        className="block w-full object-cover"
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const flip = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div className={flip ? "lg:order-2" : ""}>
        <ProjectMedia project={project} />
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-display text-xl text-accent">0{index + 1}</span>
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-ink">{project.name}</h3>
        </div>
        {project.award && (
          <p className="mt-3 inline-block bg-accent px-3 py-1 font-mono text-xs font-bold tracking-wider2 text-paper">
            ★ {project.award}
          </p>
        )}
        <p className="mt-4 text-lg font-semibold text-ink">{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
        {project.howItWorks && (
          <div className="mt-4 border-l-2 border-accent pl-4">
            <p className="font-mono text-xs tracking-wider2 text-muted uppercase">How it works</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">{project.howItWorks}</p>
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.impact.map((item) => (
            <li
              key={item}
              className="border border-ink bg-paper px-2.5 py-1 font-mono text-xs font-bold text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 font-mono text-xs text-muted">{project.stack.join(" · ")}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-5 py-2.5 font-mono text-sm font-bold text-paper transition-colors hover:bg-accent"
            >
              LIVE ↗
            </a>
          )}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink px-5 py-2.5 font-mono text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            GITHUB ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
