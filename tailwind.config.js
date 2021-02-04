module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
