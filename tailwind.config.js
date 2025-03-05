/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "768px" },
    },
    extend: {
      fontFamily: {
        medodica: ["Medodica", "sans-serif"],
      },
      colors: {
        "gray-2": "#ADADAD",
        "gray-3": "#DEDEDE",
        "gray-4": "#D0D0D0",
      },
    },
  },
  plugins: [],
};
