import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ✅ FIXED: keyframes & animation are INSIDE extend
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
      rotate: {
      'y-5': 'rotateY(5deg)',
      'y--5': 'rotateY(-5deg)',
      },
      colors: {
        // ✅ Your African Earth palette
        'earth-ochre': '#B04A2A',
        'savanna-gold': '#D4A574',
        'twilight-indigo': '#2C3E6A',
        'acacia-green': '#567D46',
        'sky-rose': '#E8B4A0',
      },
    },
  },
  plugins: [],
}
export default config