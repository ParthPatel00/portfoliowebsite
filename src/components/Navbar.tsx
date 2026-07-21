import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "work" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Toolkit", id: "tech" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-paper transition-shadow ${
        scrolled ? "shadow-[0_2px_0_0_rgba(32,30,29,0.15)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-mono text-lg font-bold text-ink transition-colors hover:text-accent"
          onClick={closeMenu}
        >
          <span className="text-accent">~</span>/parth
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-mono text-xs tracking-wider2 text-ink uppercase transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-accent px-4 py-2 font-mono text-xs font-bold tracking-wider2 text-paper uppercase transition-transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="p-2 text-ink md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t-2 border-ink bg-paper md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block border-b border-ink/10 py-3 font-mono text-sm tracking-wider2 text-ink uppercase"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  className="block bg-accent py-3 text-center font-mono text-sm font-bold tracking-wider2 text-paper uppercase"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
