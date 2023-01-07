const path = require('path');
const { merge } = require('webpack-merge');
const commmon = require('./webpack.common');

module.exports = merge(commmon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
});
