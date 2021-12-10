module.exports = {
  content: [
    './src/**/*.html',
    '.src/*.html',
    '.src/*.js'
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.500'),
            },
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.500'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.50'),
            },
          }
        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}
