/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-image": "url('/src/assets/icons8-search-50.png')",
      },
      colors: {
        "orange-shade": "#E7702E",
        "primary-btn": "rgb(27, 117, 208)",
        "primary-btn-dark": "#155CA2",
      },
    },
  },
  plugins: [],
};
