module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...process.env.NODE_ENV === 'production'
      ? [require('cssnano')]
      : []
  ]
}
