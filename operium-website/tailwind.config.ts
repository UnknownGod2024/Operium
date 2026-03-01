import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C1C1A",
        stone: "#5C5C55",
        fog: "#F7F6F2",
        linen: "#FBFAF7",
        sand: "#E9E6DF",
        accent: "#2B3A35"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "ui-serif", "serif"]
      },
      letterSpacing: {
        tighter: "-0.03em"
      },
      boxShadow: {
        soft: "0 24px 60px -40px rgba(0,0,0,0.35)",
        outline: "0 0 0 1px rgba(20,20,20,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
