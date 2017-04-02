const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create multiple css bundles, one per JS entry file
const extractCSS = new ExtractTextPlugin('[name].css');
const extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    'bundle': './client/src/js/main.js',
    'vendor': './client/src/js/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'client/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      { //import template files
        test: /\.html$/,
        use: ['raw-loader']
      },
      { //bundle vendor styles
        test: /\.css$/,
        use: extractCSS.extract(['css-loader'])
      },
      { //bundle custom styles
        test: /\.scss$/,
        use: extractSASS.extract(['css-loader', 'sass-loader'])
      },
      { //bundle vendor images and fonts
        test: /\.(jpe?g|png|svg|gif|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 }
          }
        ]
      },
      { //expose jQuery in global scope as 'jQuery' and '$'
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    extractCSS,
    extractSASS,
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new LiveReloadPlugin()
  ]
}