/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lblue': "#7289da",
        'grey': '#99aab5',
        'dgrey': '#2c2f33', 
        'black': '#23272a'
      }
    },
  },
  plugins: [],
}

