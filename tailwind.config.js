/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '100px',
      // => @media (min-width: 100px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '992px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require("daisyui")],

}
