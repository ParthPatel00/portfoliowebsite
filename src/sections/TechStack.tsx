import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { techCategories } from "../data/techStack";
import { containerVariants, itemVariants, viewportOnce } from "../lib/motion";

function TechStack() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-24">
      <SectionHeader index="05" label="Toolkit" title="What I Work With" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {techCategories.map((category) => (
          <motion.div
            key={category.label}
            variants={itemVariants}
            className="border-2 border-ink bg-paper shadow-hard-sm"
          >
            <div className="flex items-center gap-2 border-b-2 border-ink px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" aria-hidden />
              <span className="ml-2 font-mono text-xs font-bold tracking-wider2 text-ink">
                {category.label}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2 p-4">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="border border-ink/40 px-2.5 py-1 font-mono text-xs text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;
