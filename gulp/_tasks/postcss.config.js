module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('postcss-mixins'),
    require('postcss-utilities'),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-nesting'),
    require('postcss-apply'),
    require('autoprefixer'),
    require('cssnano')
  ]
});
