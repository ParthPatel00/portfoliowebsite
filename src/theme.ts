export const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
  };
  
  export const loadStoredTheme = () => {
    const stored = localStorage.theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (stored === 'dark' || (!stored && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  