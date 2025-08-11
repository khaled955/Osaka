/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,css}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
