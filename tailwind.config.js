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
      },
      screens: {
        'xs': '320px'
      },
      animation: {
        typing: 'typing 2s steps(22), blink .5s step-end infinite alternate'
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%',
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          },
        }
      },
      gridTemplateColumns: {
        'custom': 'repeat(6, minmax(150px, 200px))'
      },
    },
  },
  plugins: [],
}

