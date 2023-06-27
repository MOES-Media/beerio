/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dot: 'rgba(152, 128, 255, 0.2)'
      },
      animation: {
        'dot': 'dot 1s infinite alternate 1.0s',
        'dot-before': 'dot 1s infinite alternate 0.5s',
        'dot-after': 'dot 1s infinite alternate 1.5s',
      },
      keyframes: {
        'dot': {
          '0%': {
            'background-color': '#9880ff'
          },
          '50%, 100%': {
            'background-color': 'rgba(152, 128, 255, 0.2)'
          }
        }
      }
    },
  },
  plugins: [],
}

