/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#FF4D4D',
          200: '#ff8279',
          300: '#ffecda',
        },
        accent: {
          100: '#990000',
          200: '#ffa783',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#1A1A1A',
          200: '#292929',
          300: '#404040',
        },
      }
    },
  },
  plugins: [],
};
