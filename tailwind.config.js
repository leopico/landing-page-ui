const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
        secondary: "Roboto, sans-serif",
      },
      lightBlue: colors.blue,
      cyan: colors.cyan,
    },
  },
  plugins: [],
};
