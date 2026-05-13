/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#f7f5f2',
          secondary: '#efecea',
          card: '#ffffff',
          dark: '#1c1917',
        },
        stone: {
          925: '#1c1917',
        },
        accent: {
          orange: '#c2410c',
          orangeLight: '#ea580c',
          orangePale: '#fff7ed',
          blue: '#1d4ed8',
          blueLight: '#2563eb',
          bluePale: '#eff6ff',
        },
        border: {
          DEFAULT: '#e5ded6',
          strong: '#d6cec4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-md': '0 4px 12px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.04)',
        'card-lg': '0 8px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
