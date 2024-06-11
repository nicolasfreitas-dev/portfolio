/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#242424",
        secondaryColor: "#FFFFFF",
        terciaryColor: "#404040",
        detailColorOne: "#7e22ce",
        detailColorOneHover: "#9333ea",
        detailColorTwo: "#B3B3B3",
        modalBgColor: "#13131F"
      }
    },
  },
  plugins: [],
}

