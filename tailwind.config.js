/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin');

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxsm: '0.625rem', // 10px
        xsm: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        regular: '1rem', // 16px
        md: '1.25rem', // 20px
        lg: '1.5rem', // 24px
        xlg: '2rem', // 32px
        xxlg: '2.5rem', // 40px
      },
      lineHeight: {
        xxsm: '0.875rem', // 14px
        xsm: '1rem', // 16px
        sm: '1.25rem', // 20px
        regular: '1.375rem', // 22px
        md: '1.75rem', // 28px
        lg: '2rem', // 32px
        xlg: '2.375rem', // 38px
        xxlg: '2.6875rem', // 43px
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        grayScale: {
					5: '#E9EAEC',
					50: '#D5D5D9',
					100: '#BFC0C6',
					200: '#ABABB3',
					300: '#9697A1',
					400: '#80828E',
					500: '#6B6C7A',
					600: '#565868',
					700: '#414255',
					800: '#323345',
				},
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}
