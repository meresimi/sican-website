/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0891B2',
          light: '#22D3EE',
          dark: '#0E7490',
        },
        forest: '#10B981',
        coral: '#F97316',
        sand: '#FDE68A',
        lagoon: '#06B6D4',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
