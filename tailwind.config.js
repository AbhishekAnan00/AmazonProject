/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '280px',
        'md': '570px',
        'lg': '774px',
        'xl': '1080px',
        "2xl": "1136px",
      },
    },
  },
  plugins: [],
};
