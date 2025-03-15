/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      opacity: {
        '15': '0.15',
      },
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          dark: '#071326',
          light: '#172a46',
        },
        secondary: '#1f4287',
        accent: '#2d6cdf',
        background: '#ffffff',
        foreground: '#0a192f',
        muted: '#64748b',
        'muted-foreground': '#64748b',
        card: '#ffffff',
        'card-foreground': '#0a192f',
        border: '#e2e8f0',
        input: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 