/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        paper: 'var(--c-text)',
        muted: 'var(--c-muted)',
        gold: 'var(--c-accent)',
        line: 'var(--c-line)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
