import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#607841', // Dingley
        secondary: '#CFDCC7', // Tasman
        highlight: '#B8C1A1', // Green Spring
        background: '#B3C7E2', // Raine
        accent: '#3A5A40', // Mallard
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      borderRadius: {
        large: '40px',
      }
    },
  },
  plugins: [],
} satisfies Config;
