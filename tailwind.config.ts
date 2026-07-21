import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3f2f2",
        ink: "#201e1d",
        accent: "#ec3013",
        muted: "#6b6764",
        line: "#dcdad8",
      },
      fontFamily: {
        display: ["'Archivo Black'", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        hard: "6px 6px 0 0 #201e1d",
        "hard-sm": "3px 3px 0 0 #201e1d",
      },
      letterSpacing: {
        wider2: "0.15em",
      },
    },
  },
  plugins: [],
} satisfies Config;
