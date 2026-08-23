/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F3ED',
        creamDark: '#EBD7D3', /* Using Soft accent here */
        blush: '#D9A6A6',
        blushLight: '#F3DFE1',
        rose: '#9B5C65',
        primaryPink: '#FF6FA7',
        textDark: '#3A3030',
        textLight: '#786A68',
        gold: '#B99A62',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', '"Caveat"', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal': 'reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
