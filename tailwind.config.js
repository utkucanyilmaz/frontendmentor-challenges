/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/illustration-editor-desktop.svg')",
        phones: "url('../src/images/illustration-phones.svg')",
        circle: "url('../src/images/bg-pattern-circles.svg')",
        desktop: "url('../src/images/illustration-laptop-desktop.svg')",
      },
      screens: {
        xl: "1110px",
      },
      colors: {
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208,49%,24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "gr-very-light-red": "hsl(13,100%,72%)",
        "gr-light-red": "hsl(353, 100%, 62%)",
        "gr-very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "gr-very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },

      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },

      animation: {
        "menu-open-animation": "menuOpen .5s ease-out",
        // "menu-close-animation": "menuClose .5s ease-out",
      },
      keyframes: {
        menuOpen: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        // menuClose: {
        //   "0%": { opacity: "100%" },
        //   "100%": { opacity: "0%" },
        // },
      },
    },
  },
  plugins: [],
};
