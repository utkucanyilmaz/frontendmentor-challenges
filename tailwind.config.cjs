/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0B0D17",
        "tealish-blue": "#D0D6F9",
        hover: "#979797",
      },

      fontFamily: {
        "barlow-condensed": "Barlow Condensed, sans-serif",
        barlow: "Barlow, sans-serif",
        bellefair: "Bellefair, serif",
      },

      fontSize: {
        150: "150px",
        100: "100px",
        28: "28px",
      },

      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",

        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
      },

      letterSpacing: {
        header: "4.72px",
        nav: "2.7px",
      },
    },
  },
  plugins: [],
};
