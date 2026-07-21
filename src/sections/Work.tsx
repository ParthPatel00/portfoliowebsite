import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { workExperiences } from "../data/experience";
import { viewportOnce } from "../lib/motion";

/** Bold the numbers/metrics inside a bullet: wraps digit-bearing tokens in mono accent. */
function Metric({ text }: { text: string }) {
  const parts = text.split(/(\d[\d,+.]*[%×xKM]?\+?|~\d+%|\d+ (?:seconds?|minutes?|hours?))/g);
  return (
    <>
      {parts.map((part, i) =>
        /\d/.test(part) ? (
          <span key={i} className="font-mono font-bold text-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function Work() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 pb-24">
      <SectionHeader index="02" label="Experience" title="Where I've Been" />

      <div className="space-y-12">
        {workExperiences.map((job) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="grid gap-6 border-2 border-ink bg-paper p-6 shadow-hard sm:p-8 lg:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="font-mono text-xs tracking-wider2 text-accent">
                {job.start.toUpperCase()} – {job.end.toUpperCase()}
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase text-ink">{job.company}</h3>
              <p className="mt-1 font-bold text-ink">{job.title}</p>
              <p className="font-mono text-xs text-muted">{job.location}</p>
              {job.isCurrent && (
                <p className="mt-3 inline-block border border-accent px-2 py-0.5 font-mono text-xs font-bold text-accent">
                  CURRENT
                </p>
              )}
              {job.award && (
                <p className="mt-3 inline-block bg-accent px-2.5 py-1 font-mono text-xs font-bold text-paper">
                  ★ {job.award.toUpperCase()}
                </p>
              )}
            </div>

            <div>
              <p className="font-semibold text-ink">{job.summary}</p>
              <ul className="mt-4 space-y-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden />
                    <span>
                      <Metric text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-xs text-muted">{job.stack.join(" · ")}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Work;
