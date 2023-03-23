const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  
      fontFamily: {
        popp:['Poppins'] 
      },
      colors:{
        color01:'#203239',
        color02:'#F6762E',
        bodycolor:'#EEEDDE',
        pcolor: 'rgba(32, 50, 57, 0.55)',
        textsecond: '#FF7527',
        textsecond2: 'rgba(255, 117, 39, 0.5)',
        color03: '#D6D5C7',
      },
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
      },
      screens: {

        'mob': '100px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  },
  
  },
  plugins: [require("limbcss")],
  
}