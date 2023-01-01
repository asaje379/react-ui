/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1D1929",
        gray: "#A5A3A9",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
