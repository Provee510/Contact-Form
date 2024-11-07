/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        green: {
          200: 'hsl(148, 38%, 91%)',
          600: 'hsl(169, 82%, 27%)', 
        }
      }
    },
  },
  plugins: [],
}