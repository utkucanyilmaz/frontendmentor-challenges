/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": "Open Sans, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      colors: {
        "lighter-blue": "hsl(217, 28%, 15%)",
        "dark-blue": "hsl(218, 28%, 13%)",
        "darker-blue": "hsl(219, 30%, 18%)",
        "darkest-blue": "hsl(216, 53%, 9%)",
        "gradient-blue": "hsl(198, 60%, 50%)",
        "gradient-cyan": "hsl(176, 68%, 64%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      backgroundImage: {
        desktop: "url('../images/bg-curvy-desktop.svg')",
        mobile: "url('../images/bg-curvy-mobile.svg')",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
