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
        apex: {
          dark: '#030712',
          midnight: '#061325',
          navy: '#0A2540',
          cobalt: '#0066CC',
          electric: '#0071E3',
          accent: '#2563EB',
          cyan: '#0EA5E9',
          platinum: '#F8FAFC',
          lightgray: '#F1F5F9',
          muted: '#86868B',
          carddark: '#0B132B',
          cardborder: 'rgba(255, 255, 255, 0.08)',
          lightborder: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      backdropBlur: {
        'apple': '20px',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
