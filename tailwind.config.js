/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta sobria y elegante
        'primary': '#2c3e50',      // Azul grisáceo oscuro
        'secondary': '#34495e',    // Gris azulado
        'accent': '#3498db',       // Azul suave
        'text-primary': '#2c3e50',
        'text-secondary': '#7f8c8d',
        'bg-light': '#ecf0f1',     // Gris muy claro
        'bg-white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
