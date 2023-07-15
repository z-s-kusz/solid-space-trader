/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        spaceblue: {
          primary: '#67e8f9',
          secondary: '#6366f1',
          accent: '#6b7280',
          neutral: '#1e3a8a',
          'base-100': '#111827',
          info: '#67e8f9',
          success: '#a3e635',
          warning: '#fde047',
          error: '#f87171',
        },
      },
    ],
  },
};
