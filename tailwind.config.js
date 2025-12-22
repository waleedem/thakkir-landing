/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18AC93',
        'primary-dark': '#149980',
        'primary-light': '#94ECDD',
        charcoal: '#333333',
        offwhite: '#FDFDFD',
        warmgrey: '#B0B3B8',
        golden: '#D6CDA4',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
