const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    host: '0.0.0.0',
    hot: true,
    port: 8081
  }
}