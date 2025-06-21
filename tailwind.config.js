/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightorange: "#fac27b",
      },
      fontFamily: {
        special: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}