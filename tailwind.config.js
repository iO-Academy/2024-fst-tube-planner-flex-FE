/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/components/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}

