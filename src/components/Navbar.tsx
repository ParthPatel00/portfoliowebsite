import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Tech Stack", id: "tech" },
  { name: "Work Experience", id: "work" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Parth Patel</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-white dark:bg-zinc-900">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-1 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
