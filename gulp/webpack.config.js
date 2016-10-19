const path = require('path')

module.exports.getConfig = function (type) {
  var isDev = type === 'development';
  var config = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }
  };

  if(isDev) {
    config.devtool = 'eval';
  }

  return config;
}
