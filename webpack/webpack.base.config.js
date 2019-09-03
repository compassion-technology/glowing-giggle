const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const root = '../'

module.exports = {
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:6]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.module\.css$/],
        use: [
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, root, 'src/index.html')
    })
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
