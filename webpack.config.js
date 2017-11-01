var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-simple-chatbot.min.js',
    library: 'VueSimpleChatbot',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: 'style!css!sass'
      }
    ]
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
