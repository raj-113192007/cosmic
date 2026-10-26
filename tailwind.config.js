/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0F1210',
          forest: '#18201B',
          deep: '#1E2822',
          surface: '#242F28',
          cream: '#FAF7F2',
          sand: '#EFE9DF',
          stone: '#DCD4C6',
          muted: '#8D968F',
          wood: '#966F47',
          'wood-dark': '#694B2E',
          'wood-light': '#D4B38C',
          lavender: '#8A70B2',
          'lavender-light': '#F3EEF9',
          'lavender-dark': '#503C70',
          gardenia: '#D4A034',
          'gardenia-light': '#FCF6E8',
          'gardenia-dark': '#8A6318',
          sage: '#63826F',
          emerald: '#10523C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'glow-lavender': '0 0 40px -10px rgba(138, 112, 178, 0.35)',
        'glow-gardenia': '0 0 40px -10px rgba(212, 160, 52, 0.35)',
        'glow-mist': '0 10px 50px -15px rgba(250, 247, 242, 0.15)',
        'soft-lift': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'mist': 'mist 8s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        mist: {
          '0%': { opacity: '0.4', transform: 'scale(0.98) translateY(0)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02) translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
