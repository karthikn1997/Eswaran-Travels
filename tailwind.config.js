/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        'xxs': '375px'
        
      },
     
        
        colors: {
         ' primary': '#070F4E',
         
          'secondary': '#FACC15', 
         
        },
      },
    },

  plugins: [],
}
