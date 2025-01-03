/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue for primary buttons and highlights
        secondary: '#10B981', // Green for success or health-related sections
        accent: '#F59E0B', // Yellow for subtle highlights or warning messages
        background: '#43474b', // Light gray background for sections
        card: '#FFFFFF', // White for card backgrounds
        darkText: '#111827', // Dark text for headings
        lightText: '#6B7280', // Lighter text for descriptions or secondary text
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Poppins', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem', 
      },
      boxShadow: {
        custom: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '12px',
      },
    },
  },
  plugins: [],
}
