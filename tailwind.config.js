module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      colors: {        
        secondary: '#DEA984',      
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#282828",
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