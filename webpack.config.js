const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/src/main.js',
  output: {
    path: path.resolve(__dirname, 'client/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: "css-loader"
        })
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 }
          }
        ]
      },
      // Expose jQuery in global scope as 'jQuery' and '$'
      {
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
    new ExtractTextPlugin("bundle.css"),
    new LiveReloadPlugin()
  ]
}