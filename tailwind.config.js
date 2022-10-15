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
      'display': 'Dynalight',
      'type': 'Cormorant'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}
