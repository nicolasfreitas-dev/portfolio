/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#242424",
      secondaryColor: "#FFFFFF",
      terciaryColor: "#3F3F3F",
      detailColorOne: "#FF4900",
      detailColorTwo: "#B3B3B3",
    },
  },
  plugins: [],
}

