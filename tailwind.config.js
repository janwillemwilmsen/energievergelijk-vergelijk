/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    options: {
      safelist: [
        'table', 
        'table-row-group', 
        'table-row', 
        'table-cell', 
        'bg-gray-50', 
        'p-2', 
        'rounded-md',
        'text-purple-100',
        'bg-gray-100',
        'border-b',
        'border-gray-200',
        'hover:bg-gray-100',
        'rounded-xl',
      ]
    },
  },
 
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media print { ... }
      }
    }
  },
 
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
