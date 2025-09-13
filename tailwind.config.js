/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      // ADDED: Custom gradients for description box and modal
      backgroundImage: {
        'radial-gradient-description': 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.05) 0%, rgba(17, 17, 17, 0.9) 70%, rgba(17, 17, 17, 1) 100%)',
        'radial-gradient-modal': 'radial-gradient(ellipse at top, rgba(34, 211, 238, 0.1) 0%, rgba(17, 17, 17, 0.9) 70%, rgba(17, 17, 17, 1) 100%)',
      },
      // ADDED: Custom colors for easier maintenance
      colors: {
        'brand-cyan': '#22D3EE',
        'dark-bg': '#111111',
      }
    },
  },
  plugins: [],
}