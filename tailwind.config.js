/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color-1": "#0a192f",
        "accent-color-1": "#08b9dc",
        "text-color": "#e2e8f0",
      },
    },
  },
  plugins: [],
};
