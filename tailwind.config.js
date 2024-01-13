/* eslint-env node */
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xs': '400px',
      xs: '500px',
      sm: '640px',
      '2md': '768px',
      md: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        'gowun-batang': ['Gowun Batang']
      }
    }
  },
  plugins: []
}
