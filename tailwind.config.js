// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This tells Tailwind to scan all React and JS/TS files in the src folder
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add your custom colors or settings here if needed
    },
  },
  plugins: [],
}