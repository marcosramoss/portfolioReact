/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animeLeft: {
          'to': { transform: 'translateX(0)', opacity: 'initial' },
        },
        animeRight: {
          'to': { transform: 'translateX(0)', opacity: 'initial' },
        }
      },
      animation: {
        animeLeft: 'animeLeft .5s forwards',
        animeRight: 'animeRight .5s forwards',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
