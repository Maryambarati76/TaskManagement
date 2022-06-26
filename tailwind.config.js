module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '112': '28rem',
      }
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
