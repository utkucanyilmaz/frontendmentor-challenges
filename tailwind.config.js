/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./**/*.css"],
  theme: {
    extend: {
      colors: {
        softred: "hsl(var(--soft-red))",
        cyan: "hsl(var(--cyan))",
        darkbrown: "hsl(var(--dark-brown))",
        mediumbrown: "hsl(var(--medium-brown))",
        cream: "hsl(var(--cream))",
        verypaleorange: "hsl(var(--very-pale-orange))",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
