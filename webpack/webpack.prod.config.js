const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const prodConfig = require('../config/prod')

const prodWebpackConfig = {
  plugins: [new CleanWebpackPlugin(), new webpack.EnvironmentPlugin(prodConfig)]
}

module.exports = merge.smart(baseWebpackConfig, prodWebpackConfig)
