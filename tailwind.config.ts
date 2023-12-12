/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      aspectRatio: {
        '4/4': '4 / 4',
      },
      fontFamily: {
        inter:["--var(--font-inter)"],
      },
      backgroundImage: {
        'paper-dark': "url('/images/bg-dark.jpg')",
        'paper-light': "url('/images/bg-light.jpg')",
        'white-paper': "url('/images/white.png')",
        'black-paper': "url('/images/black.png')",
      },
      colors: {
        'fakbarrblack': '#161616',
        'fakbarrwhite': '#e7e7e7'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
