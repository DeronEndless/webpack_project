const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: {
    app: [
      "@babel/polyfill",
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    publicPath : '/',
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'css-loader', options: {modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]'}},
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
      actions: path.join(__dirname, '../src/redux/actions'),
      reducers: path.join(__dirname, '../src/redux/reducers'),
      images: path.join(__dirname, '../src/images'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html')
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin()
  ]
}