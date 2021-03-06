const sass = require('@stencil/sass');

exports.config = {
  globalStyle: ['src/global/app.css'],
  globalScript: 'src/global/index.ts',
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
