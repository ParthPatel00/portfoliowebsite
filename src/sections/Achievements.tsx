import { motion } from "framer-motion";
import {
  certifications,
  hackathonHeadline,
  hackathons,
  industryAward,
} from "../data/achievements";
import { containerVariants, itemVariants, viewportOnce } from "../lib/motion";

function Achievements() {
  return (
    <div className="border-y-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl text-accent">04</span>
            <div className="h-px flex-1 bg-paper/30" />
            <span className="font-mono text-xs tracking-wider2 text-paper/60 uppercase">
              Achievements
            </span>
          </div>
          <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            {hackathonHeadline}
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {hackathons.map((hack) => (
            <motion.div
              key={hack.name}
              variants={itemVariants}
              className="border-2 border-paper/30 p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs tracking-wider2 text-accent">★ WINNER</p>
              <h3 className="mt-2 font-display text-xl uppercase">{hack.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{hack.detail}</p>
              {hack.projectSlug && (
                <a href="#projects" className="mt-3 inline-block font-mono text-xs text-accent hover:underline">
                  SEE THE PROJECT ↑
                </a>
              )}
              {hack.href && (
                <a
                  href={hack.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-xs text-accent hover:underline"
                >
                  GITHUB ↗
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mt-8 border-2 border-accent p-6"
        >
          <p className="font-mono text-xs tracking-wider2 text-accent">INDUSTRY</p>
          <h3 className="mt-2 font-display text-xl uppercase">{industryAward.name}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-paper/70">
            {industryAward.detail}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <p className="font-mono text-xs tracking-wider2 text-paper/60 uppercase">
            Certifications · Google Cloud & Microsoft Azure
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="border border-paper/40 px-3 py-1.5 font-mono text-xs font-bold tracking-wider2"
              >
                ✓ {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements;
