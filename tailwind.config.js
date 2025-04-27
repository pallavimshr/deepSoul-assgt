/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  darkMode: 'class', 
  theme: {
    extend: {
      animation: {
        'custom-bounce': 'customBounce 4s ease-in-out infinite', 
      },
      keyframes: {
        customBounce: {
          '0%, 100%': {
            transform: 'translateY(0)', 
          },
          '50%': {
            transform: 'translateY(-5px)', 
          },
        },
      },
    },
  },
  plugins: [],
}
