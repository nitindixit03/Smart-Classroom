// tailwind.config.js
import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ['Fjalla One', 'serif'], // Add Playfair Display font family
        handjet: ['Handjet', 'sans-serif'],     // Add Handjet font family
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(), // Include the NextUI plugin
  ],
};
