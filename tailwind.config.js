/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-2": "#ADADAD",
        "gray-4": "#D0D0D0",
      },
    },
  },
  plugins: [],
};
