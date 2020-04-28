
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        // 处理 loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 处理less文件需要下less-loader less
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loaders: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭 模块化  开启commentJs
          esModule: false,
          // 输出路径
          outputPath: 'imgs',
        },
      },
      {
        // 处理HTML中的图片资源
        test: /\.html$/,
        loaders: 'html-loader',
      },
      {
        // 处理 其他资源
        exclude: /\.(css|less|js|html|jpg|png|gif)$/,
        loaders: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  },
};
