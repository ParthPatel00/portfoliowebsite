import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const navItems = [
  { name: "About", path: "/" },
  { name: "Tech Stack", path: "/tech" },
  { name: "Work Experience", path: "/work" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
          Parth Patel
        </h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={clsx(
                  "hover:text-blue-500 transition-colors",
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-zinc-700 dark:text-zinc-300"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
