const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const productionConfig = {
}

module.exports = merge.smart(baseConfig, productionConfig)
