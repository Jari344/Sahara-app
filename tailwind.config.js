/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF9F6',
        surface: '#FFFFFF',
        ink: '#2B2D2E',
        muted: '#6B7280',
        border: '#E7E4DD',
        primary: {
          DEFAULT: '#3B6E8F',
          dark: '#2C5470',
          light: '#EAF1F5',
        },
        secondary: {
          DEFAULT: '#5C8A66',
          dark: '#476B4F',
          light: '#EDF4EE',
        },
        accent: {
          DEFAULT: '#D9A441',
          light: '#FBF2DE',
        },
        danger: {
          DEFAULT: '#C25B52',
          light: '#FBEBE9',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(43,45,46,0.06)',
        card: '0 4px 16px rgba(43,45,46,0.08)',
      },
    },
  },
  plugins: [],
}
