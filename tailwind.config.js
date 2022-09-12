/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '100px',
      // => @media (min-width: 100px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '992px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#642DFF",

          "secondary": "#2D89FF",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#F7F7F7",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
