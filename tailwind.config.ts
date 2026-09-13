import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xxs": "320px",
        "xs": "375px",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#f8f9fa",
        tertiary: "#e9ecef",
        "text-primary": "#000000",
        "text-secondary": "#495057",
        "accent-1": "#212529",
        "accent-2": "#343a40",
        "accent-3": "#868e96",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #000000, #333333, #666666)",
      },
    },
  },
  plugins: [],
};

export default config;
