// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Switzer', 'sans-serif'],
    },
    extend: {
      colors: {
        gris: '#f4f4f5',         // Fond, backgrounds secondaires
        blanc: '#ffffff',        // Fond principal, textes, boutons
        'bleu-ciel': '#8dbdf8',  // Accent, boutons, pictogrammes
      },
    },
  },
  plugins: [],
}
