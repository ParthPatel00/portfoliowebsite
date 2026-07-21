import { motion } from "framer-motion";
import { viewportOnce } from "../lib/motion";

interface SectionHeaderProps {
  index: string;
  label: string;
  title?: string;
}

function SectionHeader({ index, label, title }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4">
        <span className="font-display text-2xl text-accent">{index}</span>
        <div className="h-px flex-1 bg-ink/30" />
        <span className="font-mono text-xs tracking-wider2 text-muted uppercase">{label}</span>
      </div>
      {title && (
        <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] text-ink">
          {title}
        </h2>
      )}
    </motion.div>
  );
}

export default SectionHeader;
