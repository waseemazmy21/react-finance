/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#00df9a',
        'green-light': '#6ef9d8',
        'dark-navy': '#000300',
      },
    },
  },
  plugins: [],
};
