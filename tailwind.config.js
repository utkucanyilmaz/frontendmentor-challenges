/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { "league-spartan": "League Spartan, sans-serif" },
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "darker-gray": "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
