/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101827',
          red: '#D92E42',
          'red-hover': '#BF2235',
          'red-light': '#FDE8EA',
          white: '#FFFFFF',
          'cool-grey': '#E8EDF4',
          'cool-grey-light': '#F6F8FB',
          slate: '#536174',
          'slate-light': '#8A99AD',
          border: '#D8E0EB',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        'page': '1200px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 24, 39, 0.05), 0 1px 2px -1px rgba(16, 24, 39, 0.05)',
        'elevated': '0 4px 6px -1px rgba(16, 24, 39, 0.07), 0 2px 4px -2px rgba(16, 24, 39, 0.05)',
        'focused': '0 0 0 3px rgba(217, 46, 66, 0.25)',
      },
    },
  },
  plugins: [],
}
