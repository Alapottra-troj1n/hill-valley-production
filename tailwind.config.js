/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFA41F"
      }
    },
   
    fontFamily: {
      'extra': 'Dynalight',
      'display': 'Cormorant',
      'type': 'Montserrat'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}
