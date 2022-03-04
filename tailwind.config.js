module.exports = {
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Bespoke Stencil", 'Roboto'],
        hero: ['Panchang', 'Roboto']
      },
      colors: {
        clr1: '#040606',
        clr2: '#92E315'
      }
    },
  },
  plugins: [],
}
