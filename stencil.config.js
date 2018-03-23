const sass = require('@stencil/sass');

exports.config = {
  serviceWorker: {
    swSrc: 'src/sw.js'
  },
  globalStyle: ['src/global/app.css'],
  plugins: [
    sass()
  ],
  preferBuiltins: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
