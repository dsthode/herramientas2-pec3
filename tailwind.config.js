module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bio-hero': "url('../images/the-rolling-stones-stage2.jpg')"
      })
    },
    colors: {
      site_blue: '#0096e3',
      breadcrumb_active: '#6c757d',
      white: '#fff'
    },
    fontFamily: {
      body: ['Raleway'],
      display: ['Changa One']
    },
    fontSize: {
      base: ['100%', '150%'],
      '100': '100%',
      '140': '140%',
      '150': '150%',
      '200': '200%',
      '300': ['300%', '58px'],
      '400': '400%'
    },
    width: {
      '1/2': '50%',
      '3/5': '60%',
      '4/5': '80%',
      '90': '90%',
      '95': '95%',
      'full': '100%'
    },
    height: {
      '70vh': '70vh'
    },
    textShadow: {
      'white': '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
      'black': '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
    }
  },
  variants: {
    extend: {
      padding: ['before']
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-textshadow')
  ],
}
