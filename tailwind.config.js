/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans"],
      },
      colors: {
        primary_backgroundLighterColor: {
          50: "#FFE5E5",
          200: "#FFC7C7",
          300: "#FF9494",
          400: "#F25C5C",
          500: "#D42525",
        },
        primary_backgroundDarkerColor: {
          600: "#A11010",
          700: "#6E0808",
          800: "#3B0303",
          900: "#1F0000",
        },
        primary_grays: {
          50: "#FCF0F0",
          100: "#E5DDDD",
          200: "#CCC4C4",
          300: "#B2ABAB",
          400: "#998E8E",
          500: "#807070",
          600: "#665A5A",
          700: "#4D4343",
          800: "#332E2E",
          900: "#262121",
        },
        primary_white: {
          100: "#FFFFFF",
          200: "#B7F2B6",
          300: "#8AEB88",
          400: "#57DE54",
          500: "#2AD427",
        },
        primary_black: {
          600: "#2B2828",
          700: "#211E1E",
          800: "#1A1717",
          900: "#0D0C0C",
          950: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
