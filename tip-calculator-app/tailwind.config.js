/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        strongcyan: "hsl(172, 67%, 45%)",
        verydarkcyan: "hsl(183, 100%, 15%)",
        darkgrayishcyan: "hsl(186, 14%, 43%)",
        grayishcyan: "hsl(184, 14%, 56%)",
        lightgrayishcyan: "hsl(185, 41%, 84%)",
        verylightgrayishcyan: "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
