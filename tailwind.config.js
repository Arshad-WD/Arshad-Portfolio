/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        transform: ["Transformer" , 'Blackletter'],
      },
      textColor:{
        transparent: 'transparent',
      },
      stroke:{
        black:'#000000',
      }
    },
  },
  plugins: [],
}

