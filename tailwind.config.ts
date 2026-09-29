import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#07090e",
          50: "#131826",
          100: "#0f1420",
          200: "#0d131f",
          300: "#0b101b",
          400: "#090d16",
          500: "#07090e",
        },
        cyber: {
          cyan: "#00f2fe",
          "cyan-glow": "#38bdf8",
          emerald: "#00f5a0",
          purple: "#9d4edd",
          violet: "#7928ca",
          amber: "#ffb703",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -5px rgba(0, 242, 254, 0.35)",
        "neon-emerald": "0 0 25px -5px rgba(0, 245, 160, 0.35)",
        "neon-purple": "0 0 25px -5px rgba(157, 78, 221, 0.35)",
        "neon-amber": "0 0 25px -5px rgba(255, 183, 3, 0.35)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-flow": "glowFlow 6s ease infinite alternate",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        glowFlow: {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
