/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EAA121',
        content: '#183867',
        secondary: '#7C8DB0',
        title: '#6E7491',
        disabled: '#8F8F8F',
      },
    },
  },
  plugins: [],
}
