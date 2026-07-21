import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { earlierProjects, featuredProjects } from "../data/projects";

function Projects() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-24">
      <SectionHeader index="03" label="Projects" title="Selected Work" />

      <div className="space-y-24">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-24 border-t-2 border-ink pt-8">
        <button
          onClick={() => setShowEarlier((v) => !v)}
          className="flex w-full items-center justify-between font-mono text-sm tracking-wider2 text-muted uppercase transition-colors hover:text-accent"
          aria-expanded={showEarlier}
        >
          <span>Earlier work · undergrad ML</span>
          <span className="font-display text-xl">{showEarlier ? "−" : "+"}</span>
        </button>
        <AnimatePresence initial={false}>
          {showEarlier && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="grid gap-4 pt-6 sm:grid-cols-3">
                {earlierProjects.map((project) => (
                  <li key={project.slug} className="border border-ink/30 p-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h4 className="font-bold text-ink group-hover:text-accent transition-colors">
                        {project.name} ↗
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
                      <p className="mt-3 font-mono text-xs text-muted">
                        {project.stack.join(" · ")}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
