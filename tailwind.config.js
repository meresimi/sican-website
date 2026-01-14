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
        // SICAN Custom Colors - Solomon Islands Palette
        ocean: {
          DEFAULT: '#004E89',
          dark: '#003A66',
          light: '#1A6BA8',
        },
        forest: {
          DEFAULT: '#2D5016',
          dark: '#1F3810',
          light: '#3F6C22',
        },
        coral: {
          DEFAULT: '#E07A3E',
          dark: '#C5662D',
          light: '#E99A6B',
        },
        sand: {
          DEFAULT: '#F4E4C1',
          light: '#F9EED9',
        },
        climate: {
          red: '#C1292E',
        },
        lagoon: '#1BA098',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
