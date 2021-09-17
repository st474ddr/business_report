const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './main.js'
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [{
      test: /\.(js)$/i,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },],
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(sass|scss)$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]', // path:路徑, name:檔名, ext:附檔名
          esModule: false
        }
      },],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.vue'],
    alias: {
      'vue$': '../node_modules/vue/dist/vue.esm.js', // 要使用有compile的vue版本
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: "assets/images",
        to: "assets/images"
      },],
    }),
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: 'template/template.html',
      viewport: 'width=640, user-scalable=no',
      description: 'des',
      Keywords: 'keyword',
      chunks: ['vendor', 'index']
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: './assets/css/all.css', })
  ],
};