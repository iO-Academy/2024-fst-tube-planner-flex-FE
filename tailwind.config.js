/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/components/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        permanentMarker: ['Permanent Marker', 'sans-serif']
      }
    },
  },
  plugins: [],
}

