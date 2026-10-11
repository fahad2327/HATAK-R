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
          'navy-dark': '#0B0F19',
          'navy-surface': '#1E293B',
          red: '#D92E42',
          'red-hover': '#C02235',
          'red-light': '#FDF2F4',
          white: '#FFFFFF',
          'cool-grey': '#E8EDF4',
          'cool-grey-light': '#F8FAFC',
          slate: '#536174',
          'slate-dark': '#334155',
          'slate-light': '#94A3B8',
          border: '#E2E8F0',
          'border-dark': '#1E293B',
        },
      },
      fontFamily: {
        sans: [
          'Outfit',
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
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 24, 39, 0.05), 0 1px 2px -1px rgba(16, 24, 39, 0.05)',
        'card': '0 4px 6px -1px rgba(16, 24, 39, 0.06), 0 2px 4px -2px rgba(16, 24, 39, 0.04)',
        'elevated': '0 10px 15px -3px rgba(16, 24, 39, 0.08), 0 4px 6px -4px rgba(16, 24, 39, 0.03)',
      },
      maxWidth: {
        'page': '1280px',
      },
    },
  },
  plugins: [],
}
