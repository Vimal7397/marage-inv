import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mandap: {
          dark: "#3f000b",
          maroon: "#6b0508",
          ruby: "#500207",
          gold: "#f2c06e",
          goldLight: "#ffdfaf",
          goldMuted: "#c89d53",
          goldBorder: "rgba(242, 192, 110, 0.2)",
          champagne: "#fff6e9",
        },
      },
      fontFamily: {
        pattaya: ["var(--font-pattaya)", "cursive"],
        serif: ["var(--font-serif)", "Playfair Display", "Times New Roman", "serif"],
        script: ["var(--font-alex-brush)", "Alex Brush", "cursive"],
        body: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "envelope-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        modalSlideUp: {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(242, 192, 110, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(242, 192, 110, 0.6)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "envelope-float": "envelope-float 3s ease-in-out infinite",
        modalSlideUp: "modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 0.3s ease-out forwards",
        pulseGlow: "pulseGlow 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

