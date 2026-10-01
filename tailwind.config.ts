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
        palette: {
          bg: "#090909",              // Background: Matte black
          "bg-secondary": "#111111",  // Surface: Dark charcoal
          card: "#111111",            // Surface: Dark charcoal
          elevated: "#171717",        // Secondary surface
          border: "#292929",          // Border: Minimal border
          "border-subtle": "#202020", // Subtle border
          text: "#F5F5F0",            // Primary text: Off-white
          "text-secondary": "#929292",// Secondary text
          muted: "#929292",           // Secondary/muted text
          accent: "#F5C400",          // Accent yellow: Forensic yellow
          "accent-hover": "#FFD21A",  // Bright yellow hover
          "amber-black": "#1E1906",   // Subtle yellow-tinted charcoal for primary CTA contrast
          success: "#4EAD6A",         // Restrained status green
          error: "#C95C5C",           // Restrained status red
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

