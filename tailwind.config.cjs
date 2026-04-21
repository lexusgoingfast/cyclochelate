/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './legal.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(48px,6.5vw,88px)',
          { lineHeight: '0.95', letterSpacing: '-0.025em' },
        ],
        headline: [
          'clamp(30px,3.8vw,48px)',
          { lineHeight: '1.15', letterSpacing: '-0.02em' },
        ],
        title: [
          'clamp(20px,2.2vw,28px)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.8' }],
        body: ['1rem', { lineHeight: '1.75' }],
        label: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.06em' }],
      },
      borderRadius: {
        DEFAULT: '1rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
