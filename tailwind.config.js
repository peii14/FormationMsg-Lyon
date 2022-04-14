module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      colors: {
        primary:'#2D403E',        
        secondary: {DEFAULT:'#DEA984',HOVER:'#b85e1f'},   
      },
      textColor: {
        secondary: "#f0f0f0",
        primary: "#282828",
      },
      dropShadow: {
        '3xl': '0 45px 45px rgba(0, 0, 0, 0.55)',
      },
      gridRow: {        
        'span-16': 'span 7 / span 7',      
      },
      screens: {
        samsung: "370px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};