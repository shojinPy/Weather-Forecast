/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      sizes: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      width: {
        100: "484px"
      },
      height: {
        100: "734px"
      },
      fontFamily: {
        Inria: ['inria-sans','arial','helvetica']
      },
    },
  },
  plugins: [],
}

