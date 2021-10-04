const plugin = require('tailwindcss/plugin')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        select: {
          'background-image': `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme(
              'colors.blue.500'
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`
        }
      })
    })
  ]
}
