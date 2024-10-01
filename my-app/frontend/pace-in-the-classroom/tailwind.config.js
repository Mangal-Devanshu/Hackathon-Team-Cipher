const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '20ch' }, // Adjust width according to text length
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      },
      animation: {
        typing: 'typing 3s steps(20, end) infinite', // Infinite loop for typing
        blink: 'blink 1s step-end infinite',         // Cursor blinking
      },
    },
  },
  plugins: [],
}