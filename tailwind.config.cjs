/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0B0D17",
        "tealish-blue": "#D0D6F9",
      },
      fontFamily: {
        "barlow-condensed": "Barlow Condensed, sans-serif",
        bellefair: "Bellefair, serif",
      },
    },
  },
  plugins: [],
};
