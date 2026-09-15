/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#FAFAFD",
          soft: "#FFFFFF",
          raised: "#F3F1FA",
          line: "#E7E3F5",
        },
        mist: {
          DEFAULT: "#1C1B29",
          dim: "#5B5872",
          faint: "#8B87A3",
        },
        signal: {
          DEFAULT: "#6D5EF0",
          soft: "#8B7CF6",
          dim: "#4E3FD1",
        },
        molten: {
          DEFAULT: "#FF6F5E",
          soft: "#FF9186",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #FAFAFD 88%), repeating-linear-gradient(0deg, rgba(109,94,240,0.06) 0px, rgba(109,94,240,0.06) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(109,94,240,0.06) 0px, rgba(109,94,240,0.06) 1px, transparent 1px, transparent 48px)",
      },
      boxShadow: {
        glow: "0 12px 40px -8px rgba(109,94,240,0.35)",
        "glow-molten": "0 12px 40px -8px rgba(255,111,94,0.3)",
        card: "0 1px 2px rgba(28,27,41,0.04), 0 8px 24px -8px rgba(28,27,41,0.08)",
      },
    },
  },
  plugins: [],
};
