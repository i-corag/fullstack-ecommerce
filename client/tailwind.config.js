/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow'],
      },
      colors: {
        kL: '#968452',
        kD: '#7A6427',
      },
    },
  },
  plugins: [],
};
