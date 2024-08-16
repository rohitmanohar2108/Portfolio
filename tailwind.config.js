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
          '0%, 100%': { text: 'linear-gradient(90deg, #8B5CF6, #EC4899)' }, // violet-500 to fuchsia-500
          '25%': { background: 'linear-gradient(90deg, #06B6D4, #10B981)' }, // cyan-500 to emerald-500
          '50%': { text: 'linear-gradient(90deg, #F59E0B, #EF4444)' }, // amber-500 to red-500
          '75%': { text: 'linear-gradient(90deg, #6366F1, #8B5CF6)' }, // indigo-500 to violet-500
        },
      },
      animation: {
        'color-gradient': 'colorChange 5s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};

