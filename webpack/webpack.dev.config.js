const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const devConfig = require('../config/dev')

const root = '../'

const developmentConfig = {
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(devConfig)
  ],
  devServer: {
    contentBase: path.resolve(__dirname, root, 'build'),
    historyApiFallback: true,
    port: 3000,
    hot: true
  }
}

module.exports = merge.smart(baseConfig, developmentConfig)
