import { motion } from "framer-motion";
import { viewportOnce } from "../lib/motion";

/** MLP inference latency, batch=1, from Fuse's benchmark report (Apple M-series, single-threaded). */
const rows = [
  { label: "FUSE", us: 5.2, highlight: true },
  { label: "NUMPY", us: 10.1 },
  { label: "PYTORCH EAGER", us: 10.9 },
  { label: "TORCH.COMPILE", us: 17.2 },
];

const max = Math.max(...rows.map((r) => r.us));

function BenchmarkBars() {
  return (
    <div className="border-2 border-ink bg-paper p-6 shadow-hard">
      <p className="font-mono text-xs tracking-wider2 text-muted uppercase">
        MLP INFERENCE · 4 LAYERS · BATCH=1 · LOWER IS BETTER
      </p>
      <div className="mt-6 space-y-4">
        {rows.map((row, i) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between font-mono text-xs">
              <span className={row.highlight ? "font-bold text-accent" : "text-ink"}>
                {row.label}
              </span>
              <span className="text-muted">{row.us} µs</span>
            </div>
            <div className="mt-1 h-4 w-full bg-ink/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.us / max) * 100}%` }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className={row.highlight ? "h-full bg-accent" : "h-full bg-ink"}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-muted">
        3× less peak memory · 0 heap allocs on the hot path
      </p>
    </div>
  );
}

export default BenchmarkBars;
