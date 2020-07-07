module.exports = {
  purge: ['./public/**/*.html', './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue4a: "#4A66FF",
          blue67: "#677FFF",
          green2f: "#2FEAB5",
          orangeff8: "#FF894A",
        }
      },
      spacing: {
        // plugin by issam 
        ...(() => {
          let utilities = {}
          for (let i = 0; i <= 128; i++ ) {
            utilities[`${i}-px`] = `${i}px`;
          }
          return utilities
        })()
      },
      fontSize: {
        //plugin by issam
        ...(() => {
          let utilities = {}
          for (let i = 0; i <= 64; i++ ) {
            utilities[`${i}-px`] = `${i}px`;
          }
          return utilities
        })()
      },
    },
  },
  variants: {},
  plugins: [],
}
