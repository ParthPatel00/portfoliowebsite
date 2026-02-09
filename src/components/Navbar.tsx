import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Work Experience", id: "work" },
  { name: "Projects", id: "projects" },
  { name: "Tech Stack", id: "tech" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <div className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/Pfavicon.png"
              alt="Parth Patel"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-white">Parth Patel</h1>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${link.id}`}
                className="relative text-slate-300 hover:text-white transition-colors duration-300 group"
                onClick={closeMenu}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block"
        >
          <motion.a
            href="#contact"
            className="px-6 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white font-medium hover:bg-slate-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2 text-white"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <ul className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.id}`}
                    className="block py-3 text-slate-300 hover:text-white transition-colors duration-300 border-b border-slate-700/30 hover:border-emerald-400/50"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <motion.a
                  href="#contact"
                  className="block w-full text-center py-3 bg-slate-800 border border-slate-600 rounded-lg text-white font-medium hover:bg-slate-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeMenu}
                >
                  Get In Touch
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
