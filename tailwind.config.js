/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        fold: '280px',
        'fold-aspect-ratio': { 
          'raw': '(aspect-ratio: 21.5/9)'
         },
      },
    },
  },
  plugins: [],
}

