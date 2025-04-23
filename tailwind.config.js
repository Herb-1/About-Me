/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        be: '#F5A623', // Màu be cho portfolio
      },
    },
  },
  plugins: [],
} 