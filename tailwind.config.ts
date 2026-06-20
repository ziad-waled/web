import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f4f5f6",
          100: "#e5e8ea",
          200: "#c7ccd1",
          300: "#a0a8b0",
          400: "#7a8389",
          500: "#5b636a",
          600: "#454c52",
          700: "#333a40",
          800: "#1f242a",
          850: "#171b1f",
          900: "#121518",
          925: "#0d1012",
          950: "#08090b",
        },
        amber: {
          50: "#fff8ec",
          100: "#ffecc9",
          200: "#ffd68d",
          300: "#ffb84f",
          400: "#ff9d24",
          500: "#f5840f",
          600: "#d9670a",
          700: "#b34e0c",
          800: "#8f3f10",
          900: "#763611",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(245,132,15,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,132,15,0.07) 1px, transparent 1px)",
        "blueprint-grid-fine":
          "linear-gradient(rgba(122,131,137,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122,131,137,0.08) 1px, transparent 1px)",
        "steel-gradient":
          "linear-gradient(160deg, #121518 0%, #08090b 55%, #171b1f 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
        "grid-fine": "12px 12px",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        riveterPing: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        scanline: "scanline 4s linear infinite",
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        riveterPing: "riveterPing 2.2s ease-out infinite",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
