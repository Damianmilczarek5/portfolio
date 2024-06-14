/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'python-gradient': 'linear-gradient(90deg, #FFD43B 50%, #306998 50%)',
        'mysql-gradient': 'linear-gradient(90deg, #00758F 50%, #F29111 50%)',
      },
    },
  },
  plugins: [],
}