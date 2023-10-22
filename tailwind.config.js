/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: { 
      screens: {
        mobile: '640px',
        desktop: "1440px",
      },
      colors: {
        primary: {
          red: 'hsl(1, 90%, 64%)',
          blue: 'hsl(219, 85%, 26%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
          lightGrayishBlue_1: 'hsl(211, 68%, 94%)',
          lightGrayishBlue_2: 'hsl(205, 33%, 90%)',
          grayishBlue: 'hsl(219, 14%, 63%)',
          darkGrayishBlue: 'hsl(219, 12%, 42%)',
          veryDarkBlue: 'hsl(224, 21%, 14%)',
        },
      },
      fontFamily: {
        plus_jakarta_sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        extrabold: '800',
      },
    },
  },
  plugins: [],
}

