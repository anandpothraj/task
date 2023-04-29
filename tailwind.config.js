/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    colors: {
      'gray01': '#323438',
      'gray02': '#85878C',
      'gray03': '#E5E6E9',
      'white': '#FFFFFF',
      'green': '#00C362',
      'blue': '#2196F3',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    rounded : {
      'rounded01' : '18px'
    }
  }
};