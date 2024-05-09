/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/javascript/**/*.{vue,js,ts,jsx,tsx}',
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        '--text-white': '#FFF',
        '--text-base': '#000',
        '--text-placeholder': '#BBB',
        '--border-01': '#595a62',
        '--bg-base': '#FAFAFA',
        '--bg-base-2': '#BBBBBB',
        '--black-5%': '#1C1C1C0D',
        '--black-40%': '#1C1C1C66',
        '--brand-01': '#E64422',
        '--brand-02': '#32312F',
        '--brand-03': '#F5F5F5',
        '--widget-01': '#FFE2E5',
        '--widget-04': '#DCFCE7',
        '--widget-02': '#F3E8FF',
        '--widget-03': '#FEBCAF',
        '--widget-05': '#FFF4DE',
        '--widget-06': '#B1E3FF',
        '--color-blue': '#12A7FB',
        'Supporting-Color/Green': '#3CD856',
        '--color-blue-href': '#2489FF',
        '--color-orange': '#F47221',
        'muted-grey': '#A6AAB5',
        '--color-grey-3': '#828282',
        '--color-grey-2': '#C2C2C2',
        '--grey': '#C6C6C6',
        '--border-grey': '#8A8B9F66',
        '--color-green-3': '#6FCF97',
        '--color-green-4': '#28CA42',
        '--color-green-5': '#e2f5ea',
        '--devide-color': '#E9EDF7',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
