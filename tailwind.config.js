/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        boulder: '#7D7D7D',
        mercury: '#E5E5E5',
        concrete: '#F3F3F3',
      },
    },
  },
  plugins: [],
};
