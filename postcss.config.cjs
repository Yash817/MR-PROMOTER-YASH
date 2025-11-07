module.exports = {
  plugins: {
    // Enable nesting BEFORE tailwind so nested rules are handled prior to Tailwind processing
    'postcss-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}