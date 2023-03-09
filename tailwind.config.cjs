/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      backgroundImage: {
        "pattern-desktop": "url('/images/pattern-bg-desktop.png')",
        "pattern-mobile": "url('/images/pattern-bg-mobile.png')",
      },
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
