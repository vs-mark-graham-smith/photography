/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  safelist: [
    'fill-primary',
    {
        pattern: /(bg|fill|text|color)-(primary|secondary|highlight)/,
        variants: ['primary', 'secondary', 'highlight']
    }
  ],
  theme: {
    extend: {
        colors: {
            "primary": "var(--color-primary)",
            "secondary": "var(--color-secondary)",
            "highlight": "var(--color-highlight)",
            "light-primary": "var(--color-light-primary)"
        }
    },
  }
}
