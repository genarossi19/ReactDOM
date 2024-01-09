/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif"
      },
      animation:{
        'spin-slow': 'spin 5s linear infinite'
        
      },
      transitionDuration:{
        'transition-duration-slow': '300ms;'
      }
    },
  },
  plugins: [],
}

