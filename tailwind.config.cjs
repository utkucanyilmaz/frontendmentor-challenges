/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-dark-blue-500": "hsl(209, 23%, 22%)",
        "neutral-dark-blue-700": "hsl(207, 26%, 17%)",
        "neutral-dark-blue-800": "hsl(200, 15%, 8%)",
        "neutral-gray-500": "hsl(0, 0%, 52%)",
        "neutral-gray-100": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
