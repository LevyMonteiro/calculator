/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'neutral-50': '#fff',
      'neutral-100': '#f5f5f4',
      'neutral-500': '#737373',
      'neutral-600': '#363636',
      'neutral-700': '#262626',
      'neutral-800': '#171717',
      'neutral-900': '#0a0a0a',
      'neutral-950': '#000',
      red: '#a50000',
      blue: '#0b575a',
      yellow: '#ffa500',
    },
    extend: {},
  },
  plugins: [require('@designbycode/tailwindcss-text-shadow')],
};
