/** @type {import('tailwindcss').Config} */

const colors = require ('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
