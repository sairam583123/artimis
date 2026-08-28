/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7fb',
          100: '#d6ecf3',
          200: '#b0dae8',
          300: '#7ec0d7',
          400: '#48a0bf',
          500: '#2a80a3',
          600: '#1f6685',
          700: '#1c526b',
          800: '#1a4459',
          900: '#123344',
          950: '#0b2130',
        },
        brass: {
          50: '#fdf8ee',
          100: '#f9edd1',
          200: '#f2d99f',
          300: '#e9bf67',
          400: '#e0a63e',
          500: '#d18f27',
          600: '#b06f1e',
          700: '#8c541c',
          800: '#71441c',
          900: '#5f3a1c',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(18,51,68,0.12)',
      },
    },
  },
  plugins: [],
}
