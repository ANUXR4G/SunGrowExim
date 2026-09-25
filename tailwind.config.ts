import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS-first config; this file is kept minimal for tooling.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
