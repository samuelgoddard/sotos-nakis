module.exports = {
  theme: {
    extend: {
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
      fontFamily: {
        sans: ['HaasGrotDisp', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: 0,
          backgroundColor: theme('colors.gray.300'),
          '&:focus': {
            backgroundColor: theme('colors.gray.200'),
          }
        },
        textarea: {
          borderRadius: 0,
          backgroundColor: theme('colors.gray.300'),
          '&:focus': {
            backgroundColor: theme('colors.gray.200'),
          }
        },
      },
    }),
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    }),
    require('@tailwindcss/custom-forms')
  ],
  corePlugins: {
    container: false
  }
}