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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
