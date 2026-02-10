/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      claro: {
        red: '#E60000',
        dark: '#B30000',
        gray: '#F5F5F5',
        text: '#2E2E2E',
      },
    },
  },
},
  plugins: [],
}
