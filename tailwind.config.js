/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(260px, 1fr))',
        blogs: 'repeat(auto-fill, minmax(340px, 1fr))',
        'blogs-xs': 'repeat(auto-fill, minmax(240px, 1fr))',
      },

      colors: {
        main: {
          DEFAULT: 'rgb(97, 83, 205)',
        },
      },
    },
  },
  plugins: [],
};
