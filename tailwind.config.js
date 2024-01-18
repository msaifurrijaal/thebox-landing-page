/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#2947A9",
        secondary: "#F9995D",
        black: "#0f172a",
        dark: "#334155",
        gray: "#64748b",
        "light-gray": "#cbd5e1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
