/** @type {import('tailwindcss').Config} */
module.exports = {
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
          bg: "#0A0B0C",           // Primary background: Matte Black
          "bg-secondary": "#111315",// Secondary background: Charcoal Black
          card: "#17191C",         // Card surface: Graphite
          elevated: "#1D2024",     // Elevated surface: Soft Graphite
          border: "#292D32",       // Primary border: Dark Steel
          "border-subtle": "#353A40", // Secondary border: Subtle Gray
          text: "#F2F1EC",         // Primary text: Warm White
          "text-secondary": "#A6A9AD", // Secondary text: Cool Gray
          muted: "#70757B",        // Muted text: Slate Gray
          accent: "#F5C542",       // Primary accent: Forensic Yellow
          "accent-hover": "#FFD75A", // Bright accent/hover: Signal Yellow
          "amber-black": "#29230F", // Dark yellow surface: Amber Black
          success: "#5FAE73",      // Success: Muted Green
          error: "#C95C5C",        // Error: Muted Red
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
