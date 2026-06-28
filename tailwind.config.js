/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Departure Mono', 'monospace'],
        body: ['Departure Mono', 'monospace'],
        mono: ['Departure Mono', 'monospace'],
        sans: ['Departure Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
        },
        border: {
          primary: 'var(--border-primary)',
        }
      }
    },
  },
  plugins: [],
}
