const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')

const root = '../'

const developmentConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, root, 'build'),
    historyApiFallback: true,
    port: 3000,
    hot: true
  }
}

module.exports = merge.smart(baseConfig, developmentConfig)
