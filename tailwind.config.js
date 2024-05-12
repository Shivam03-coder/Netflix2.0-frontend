/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darken: "rgba(0,0,0,0.7)",
      fadedarken: "rgba(0,0,0,0.4)",
      white: "#fcfcfc",
      cyan: "#00ffff",
      danger: "#ff0000",
      black: "#000000",
    },
    fontFamily: {
      Popins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
