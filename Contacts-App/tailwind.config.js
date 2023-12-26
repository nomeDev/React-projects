/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      red: "#D01C28",
      gray: "#5A5959",
      yellow: "#FFEAAE",
      "dark-yellow": "#FCCA3F",
      orange: "#F6820C",
      purple: "#5F00D9",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
}
