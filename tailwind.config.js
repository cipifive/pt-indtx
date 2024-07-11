/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'selector',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'tablet': '100px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1550px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily : {
        'soccer' : ['soccer-font', 'sans'],
        'soccer-bold' : ['soccer-font-bold', 'sans']
      },
      backgroundImage : {
        'stats_btn' : 'url("./src/assets/stats.jpg")'
      }
      
    },
    
  }
  