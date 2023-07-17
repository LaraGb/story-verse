/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      gridTemplateColumns:{
        'cards':'repeat(auto-fit,minmax(8rem,1fr))'
      },
      colors:{
       'primary':'#605BFF',
       'primary_light':'#8D98DC',
       'primary_dark': '#4F60C9'
      },
    }
  },
  plugins: [],
}
