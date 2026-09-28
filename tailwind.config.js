/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0E0E',
          800: '#161616',
          700: '#1C1C1C',
          600: '#2A2A2A',
        },
        peach: {
          DEFAULT: '#FDC17B',
          hot: '#F4A24A',
        },
        cream: '#F6F1EA',
        muted: '#C9C3BA',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(253, 193, 123, 0.45)',
      },
    },
  },
  plugins: [],
}
