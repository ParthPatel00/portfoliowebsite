import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-emerald-400 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ArrowUp
              size={20}
              className="group-hover:text-emerald-300 transition-colors"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-emerald-500/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
