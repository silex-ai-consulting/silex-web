import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050816",
        midnight: "#091126",
        steel: "#97A6C4",
        ice: "#8DB7FF",
        cloud: "#F4F1EA",
        line: "rgba(141, 183, 255, 0.22)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        panel: "0 24px 60px rgba(3, 8, 24, 0.45)",
        glow: "0 0 0 1px rgba(141, 183, 255, 0.18), 0 12px 32px rgba(9, 17, 38, 0.3)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(141,183,255,0.14), transparent 28%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 24%)"
      },
      screens: {
        xs: "480px"
      }
    }
  },
  plugins: []
};

export default config;
