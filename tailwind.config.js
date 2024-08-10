/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        19: "19deg",
      },
      colors: {
        "custom-grey": "#949198",
        "custom-grey-2": "#969696"
      },
      backgroundImage: {
        'radial-gradient-custom': 'radial-gradient(circle, #0e0e0e, black)',
      },
      fontFamily: {
        "font-geo": ["Geo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
