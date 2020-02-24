var path = require('path');
var webpack = require('webpack')

module.exports = {
  cache: true,
  entry: './demo.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'demo.build.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx']
  }
}