const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devConfig = require('../config/dev')
const prodConfig = require('../config/prod')

const root = '../'

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development'

  const devPlugins = [new webpack.HotModuleReplacementPlugin()]
  const prodPlugins = [new CleanWebpackPlugin()]

  return {
    devtool: devMode ? 'source-map' : false,
    devServer: {
      contentBase: path.resolve(__dirname, root, 'build'),
      historyApiFallback: true,
      hot: true,
      port: 3000
    },
    entry: {
      main: [path.resolve(__dirname, root, 'src/index.js')]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.module\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: devMode
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[local]-[hash:base64:6]'
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: [/node_modules/, /\.module\.css$/],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: devMode
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: false
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          include: path.resolve(__dirname, root, 'src/assets'),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:base64:6].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, root, 'src/components'),
        '@pages': path.resolve(__dirname, root, 'src/pages'),
        '@assets': path.resolve(__dirname, root, 'src/assets'),
        '@services': path.resolve(__dirname, root, 'src/services'),
        '@utils': path.resolve(__dirname, root, 'src/utils'),
        '@hooks': path.resolve(__dirname, root, 'src/hooks')
      },
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, root, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, root, 'src/index.html'),
        title: 'React Template'
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      }),
      new webpack.EnvironmentPlugin(devMode ? devConfig : prodConfig),
      ...(devMode ? devPlugins : prodPlugins)
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor'
          }
        }
      }
    }
  }
}
