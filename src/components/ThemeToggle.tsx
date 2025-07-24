import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { toggleDarkMode, loadStoredTheme } from "../theme";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    loadStoredTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    toggleDarkMode();
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;
