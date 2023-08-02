/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#FF720D",
        200: "#CC5500",
      },
      secondary: {
        100: "#F79226",
        200: "#DD7608",
      },
      dark: "#20283E",
      light: "#FFFAF6",
    },
    extend: {},
  },
  plugins: [],
};
