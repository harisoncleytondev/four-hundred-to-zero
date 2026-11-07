/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        era1: {
          dark: '#1C1004',
          terracotta: '#9A3412',
          gold: '#D97706',
          amber: '#F59E0B',
          sand: '#FEF3C7',
          accent: '#EA580C',
        },
        era2: {
          dark: '#0B0F19',
          indigo: '#1E1B4B',
          purple: '#4338CA',
          violet: '#6366F1',
          cream: '#EDE9FE',
          accent: '#818CF8',
        },
        era3: {
          dark: '#18181B',
          rust: '#7C2D12',
          brick: '#C2410C',
          industrial: '#0284C7',
          steel: '#CBD5E1',
          accent: '#F97316',
        },
        era4: {
          dark: '#050814',
          neonCyan: '#06B6D4',
          neonEmerald: '#10B981',
          electricPurple: '#8B5CF6',
          vibrantPink: '#EC4899',
          lightBg: '#F8FAFC',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
