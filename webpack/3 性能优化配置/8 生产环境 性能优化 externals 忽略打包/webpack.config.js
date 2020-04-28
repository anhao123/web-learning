
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css处理





// 设置环境变量 css兼容处理 （走的是开发环境 还是 生产环境 默认是生产环境）
// process.env.NODE_ENV='development'
/*代码分割*/
module.exports = {

  entry: './src/js/index.js',

  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'production',

  externals:{
    jquery:'jQuery'
  }
};
