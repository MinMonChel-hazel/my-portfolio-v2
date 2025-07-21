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
      colors: {
        'themeColor': '#01b2f6'
      },
      fontFamily: {
        // override default sans font
        sans: ["'Kantumruy Pro'", "sans-serif"],
      },
      boxShadow: {
        soft: '4px 4px 20px rgba(0, 100, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
