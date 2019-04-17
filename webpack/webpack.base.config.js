const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = '../'

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, root, 'src/index.js')]
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
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]-[hash:base64:6]'
          }
        }]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.module\.css$/],
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: false
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, root, 'src/assets'),
        use: [ 'file-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, root, 'src/components'),
      '@pages': path.resolve(__dirname, root, 'src/pages'),
      '@assets': path.resolve(__dirname, root, 'src/assets')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, root, 'build'),
    publicPath: '/'
  },
  plugins: [
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
