/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
      'gradient': 'linear-gradient(to bottom, #0f0f0f, #1f1f1f)',
    },
    },
  },
  plugins: [],
}

