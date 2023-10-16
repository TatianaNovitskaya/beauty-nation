/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
      screens: {
        '2xl': '1440px',
        // => @media (min-width: 992px) { ... }
      },
      boxShadow: {
        '1': '20px 20px 30px 0px rgba(0, 0, 0, 0.16);',
      }
    },

  },
  plugins: [],
}
