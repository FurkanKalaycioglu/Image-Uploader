/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        somesortgray: "#F6F8FB",
        backgroundwhite: "#FAFAFB",
        headingcolor: "#4F4F4F",
        bordercolor: "#E6E6E6",
      },

      keyframes: {
        loading: {
          "0%": { left: "0" },
          "50%": { left: "calc(100% - 5.75rem)" },
          "100%": { left: "0" },
        },
      },
      animation: {
        loading: "loading 2s linear infinite",
      },
    },
  },
  plugins: [],
};
