/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        l: "1100px",
        special: "900px",
      },
      keyframes: {
        animateModal: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        orange: "#ff7d1a",
        paleorange: "#ffede0",
        verydarkblue: "#1d2025",
        darkgrayishblue: "#68707d",
        grayishblue: "#b6bcc8",
        lightgrayishblue: "#f7f8fd",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      animation: {
        "animate-modal": "animateModal .5s linear",
      },
    },
  },
  plugins: [],
};
