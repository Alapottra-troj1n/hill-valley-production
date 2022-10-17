/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FFA41F",
        main_light: "#f7bc3b"
      }
    },
   
    fontFamily: {
      'extra': 'Dynalight',
      'display': 'Spectral',
      'type': 'Montserrat'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}
