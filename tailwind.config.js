// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra-petch': ['Chakra Petch', 'sans-serif'],
        'fjalla-one': ['Fjalla One', 'sans-serif'],
        'zilla-slab': ['Zilla Slab', 'serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'poppins': ['Poppins', 'sans-serif'], // Added Poppins font
        'lato': ['Lato', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
        'playfair-display': ['Playfair Display', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],

      },
      borderColor: {
        'multicolor': 'linear-gradient(45deg, red, blue, green, yellow)',
      },
    },
  },
  variants: {},
  plugins: [],
};
