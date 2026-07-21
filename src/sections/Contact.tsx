import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaCopy, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import { viewportOnce } from "../lib/motion";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; fall back to the user's mail client.
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="bg-accent text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl">06</span>
            <div className="h-px flex-1 bg-paper/40" />
            <span className="font-mono text-xs tracking-wider2 uppercase text-paper/80">
              Contact
            </span>
          </div>

          <h2 className="mt-10 font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.95]">
            Let's build
            <br />
            something.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90">
            Have a hard problem and need an engineer who will own it end to end? My inbox is
            open.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex items-center gap-3 bg-paper px-6 py-3 font-mono text-sm font-bold tracking-wider2 uppercase text-ink transition-transform hover:-translate-y-0.5"
            >
              {copied ? <FaCheck className="text-accent" /> : <FaCopy />}
              {copied ? "Copied to clipboard" : profile.email}
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-paper/40 pt-8 font-mono text-sm tracking-wider2 uppercase">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline-offset-4 hover:underline"
            >
              <FaGithub /> GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline-offset-4 hover:underline"
            >
              <FaLinkedin /> LinkedIn ↗
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Resume ↗
            </a>
            <span className="text-paper/70">{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
