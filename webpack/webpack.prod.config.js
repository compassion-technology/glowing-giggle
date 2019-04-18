const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const productionConfig = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge.smart(baseConfig, productionConfig)
