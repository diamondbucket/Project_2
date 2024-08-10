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
      },
      fontFamily: {
        "font-geo": ["Geo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
