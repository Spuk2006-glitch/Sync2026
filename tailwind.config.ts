/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acmBlue: 'rgba(16,160,204,1)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        euclid: ['"Euclid Circular B"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
