/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          500: '#8B5CF6',
          900: '#4C1D95',
        },
      },
    },
  },
  plugins: [],
};