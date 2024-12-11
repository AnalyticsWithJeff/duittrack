/** @type {import('tailwindcss').Config} */
  // tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'phone': '350px',
        // => @media (min-width: 350px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
}

