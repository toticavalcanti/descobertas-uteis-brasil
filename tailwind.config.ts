import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta da marca
        petroleo: { DEFAULT: "#0F3D3E", 900: "#0A2B2C", 700: "#185457" },
        ipe: { DEFAULT: "#F5B301", 400: "#FFC629", 600: "#D99D00" },
        vapor: "#CFE3E0",
        nevoa: "#EAF0EE",
        papel: "#F8FAF8",
        tinta: "#142221",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(10deg)" },
          "35%": { transform: "rotate(-6deg)" },
          "65%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(var(--tag-rest, 0deg))" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        swing: "swing 1.6s cubic-bezier(.3,1.4,.5,1) both",
        rise: "rise .7s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
