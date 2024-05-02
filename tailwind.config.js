/**
 * learn more for configuration tailwind : https://tailwindcss.com/docs/content-configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts}",
    "./src/layouts/**/*.{js,ts}",
    "./src/pages/**/*.{js,ts}",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      // color custom
      colors: {
        "blue-light-custom": "#1f67f3",
        "blue-dark-custom": "#0b4dcc",
        "black-custom": "#010712",
        "lime-custom": "#cfe700",
      },
      // font family custom
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
