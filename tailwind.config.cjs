/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "primary-blue": "hsl(246, 80%, 60%)",
        "primary-light-orange": "hsl(15, 100%, 70%)",
        "primary-soft-blue": "hsl(195, 74%, 62%)",
        "primary-light-red": "hsl(348, 100%, 68%)",
        "primary-lime-green": "hsl(145, 58%, 55%)",
        "primary-violet": "hsl(264, 64%, 52%)",
        "primary-soft-orange": "hsl(43, 84%, 65%)",

        "neutral-very-dark-blue": "hsl(226, 43%, 10%)",
        "neutral-dark-blue": "hsl(235, 46%, 20%)",
        "neutral-desaturated-blue": "hsl(235, 45%, 61%)",
        "neutral-pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
