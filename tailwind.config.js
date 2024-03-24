/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF5523'
        },
        bgColor: {
          DEFAULT: '#FAFAFB',
        },
      },
      boxShadow: {
        CardShadow: '3px 3px 18px #30BFBF14',
      },
    },
  },
  plugins: [],
}

