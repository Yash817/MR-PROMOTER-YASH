export default {
  plugins: {
    // Ensure nesting plugin runs before Tailwind
    'postcss-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
