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
      },
    },
  },
  variants: {},
  plugins: [],
};
