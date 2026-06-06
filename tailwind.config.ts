import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#2E7D32",
          900: "#14532d",
          950: "#052e16",
        },
        secondary: {
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
        },
        accent: {
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #388E3C 70%, #43A047 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,253,244,0.9) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #33691E 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "premium": "0 20px 60px -10px rgba(46, 125, 50, 0.3)",
        "card-hover": "0 30px 80px -15px rgba(46, 125, 50, 0.4)",
        "glass": "0 8px 32px rgba(31, 38, 135, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
