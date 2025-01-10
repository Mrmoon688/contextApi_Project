/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
