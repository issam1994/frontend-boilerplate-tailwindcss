module.exports = {
  purge: ['./public/**/*.html'],
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
        ...(() => {
          let utilities = {}
          for (let i = 0; i <= 128; i++ ) {
            utilities[`${i}-px`] = `${i}px`;
          }
          return utilities
        })()
      },
      fontSize: {
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
