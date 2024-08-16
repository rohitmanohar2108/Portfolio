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
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
        'playfair-display': ['Playfair Display', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#8B5CF6' }, // violet-500
          '25%': { color: '#EC4899' }, // fuchsia-500
          '50%': { color: '#06B6D4' }, // cyan-500
          '75%': { color: '#10B981' }, // emerald-500
          '100%': { color: '#8B5CF6' }, // back to violet-500
        },
      },
      animation: {
        'color-change': 'colorChange 5s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
