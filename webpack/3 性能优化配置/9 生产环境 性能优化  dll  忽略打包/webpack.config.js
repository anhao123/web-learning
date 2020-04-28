
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack')

const AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
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
      //告诉webpack 那些不需要打包
     new webpack.DllReferencePlugin({
        manifest:resolve(__dirname,'dll/manifest.json')
      }),
      //引入打包后的 第三方库  需要使用 插件  add-asset-html-webpack-plugin
       new AddAssetHtmlWebpackPlugin({
        filepath:resolve(__dirname,'dll/jquery.js')
      }),
  ],
  mode: 'production',
  // mode: 'development',
};
