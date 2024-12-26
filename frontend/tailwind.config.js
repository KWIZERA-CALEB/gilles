
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Primary: '#F14A00',
      main: '#121213',
      subPrimary: '#27231c',
    },
    screens: {
      sm: '640px',
      
      md: '784px',
    
      lg: '1024px',
      
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
        afacadFlux: ['Afacad Flux', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}