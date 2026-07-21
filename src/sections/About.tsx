import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CopyEmailIcon from "../components/CopyEmailIcon";
import TerminalMock from "../components/TerminalMock";
import Marquee from "../components/Marquee";
import { profile } from "../data/profile";
import { marqueeStack } from "../data/techStack";
import { containerVariants, itemVariants, viewportOnce } from "../lib/motion";

function About() {
  return (
    <div className="bg-grid">
      {/* Hero: everything, marquee included, fits one viewport */}
      <div className="flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pt-20 pb-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p
              variants={itemVariants}
              className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-wider2 text-accent uppercase"
            >
              <span className="h-2.5 w-2.5 bg-accent" aria-hidden />
              {profile.openTo}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-4 font-display text-[15vw] leading-[0.95] uppercase text-ink sm:text-7xl lg:text-[7rem]"
            >
              Parth
              <br />
              Patel
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-5 h-px w-72 max-w-full bg-ink/40" />

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-2xl sm:text-3xl font-bold text-ink"
            >
              {profile.shortRole}
              <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-muted"
            >
              {profile.tagline}
            </motion.p>

            <motion.ul variants={itemVariants} className="mt-5 flex flex-wrap gap-2">
              {profile.badges.map((badge) => (
                <li
                  key={badge}
                  className="border-2 border-ink px-3 py-1.5 font-mono text-xs font-bold tracking-wider2 text-ink"
                >
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent px-5 py-2.5 font-mono text-sm font-bold tracking-wider2 text-paper uppercase shadow-hard-sm transition-transform hover:-translate-y-0.5"
              >
                View Resume ↗
              </a>
              <div className="flex items-center gap-2.5 sm:ml-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border-2 border-ink p-2 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border-2 border-ink p-2 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <CopyEmailIcon className="border-2 border-ink p-2 text-ink transition-colors hover:border-accent hover:text-accent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <Marquee items={marqueeStack} />
      </div>

      <div id="about" className="mx-auto max-w-6xl scroll-mt-14 px-4 pt-14 pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl text-accent">01</span>
              <div className="h-px flex-1 bg-ink/30" />
              <span className="font-mono text-xs tracking-wider2 text-muted uppercase">About</span>
            </div>
            <h2 className="mt-8 font-display text-3xl sm:text-4xl uppercase leading-tight text-ink">
              I build systems that are still running years later.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              At Deloitte, I worked directly with health professionals at the Public Health Agency
              of Canada. I watched their workflows, identified the problems, and built data systems
              that are still in production today, serving millions of Canadians.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              After two years in industry, I went back for a Master's in Software Engineering with
              an AI specialization. A deliberate choice: knowing how AI actually works, not just
              how to call an API, is where the field is heading, and I want to be someone who moves
              it forward.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Mostly, though, I build. It's how I think, learn, and unwind, and I genuinely love
              every bit of it. I build in public: things get shipped, deployed, and used, not left
              to rot in a private repo.
            </p>
            <p className="mt-4 font-semibold text-ink">
              Actively looking for Software Engineer roles in the US: backend or full stack.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="border-2 border-ink p-4">
                  <p className="font-display text-3xl text-accent">{stat.value}</p>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-wider2 text-muted uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:sticky lg:top-28"
          >
            <TerminalMock />
            <div className="mt-6 space-y-3">
              {profile.education.map((edu) => (
                <div key={edu.school} className="border border-ink/30 p-4">
                  <p className="font-bold text-ink">{edu.school}</p>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
