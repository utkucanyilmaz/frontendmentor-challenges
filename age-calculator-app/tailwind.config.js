/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "hsl(259, 100%, 65%)",
        "primary-light-red": "hsl(0, 100%, 67%)",
        "neutral-off-white": "hsl(0, 0%, 94%)",
        "neutral-light-gray": "hsl(0, 0%, 86%)",
        "neutral-off-black": "hsl(0, 0%, 8%)",
      },

      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
