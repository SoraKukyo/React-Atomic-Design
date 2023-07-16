/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2D9CDB",
        secondary: "#828282",
        lightSecondary: "#C4C4C4",
        successMain: "#56CA00",
        bgMain: "#EAEBF0",
        alert: "#F72F3F",
        outlinedBorder: "#3A35413B",
        lightMain: "#9BCEEC",
        lightBlue: "#EDF4FF",
      },
      screens: {
        xs: "281px",
      },
    },
  },
  plugins: [],
};
