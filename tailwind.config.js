module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '320px',
      'sm-only': {
        max: '639px',
      },
      md: '640px',
      'md-only': {
        min: '640px', max: '1023px',
      },
      lg: '1024px',
      'lg-only': {
        min: '1024px', max: '1365px',
      },
      xl: '1366px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
