
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css处理
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置环境变量 css兼容处理 （走的是开发环境 还是 生产环境 默认是生产环境）
// process.env.NODE_ENV='development'

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      { // js 语法检查
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // 按理说一个loader 处理一种文件 需要处理其执行顺序
        enforce: 'pre', // 先执行语法检查
        options: {
          fix: true,
        },
      },//提取出来的 loader  放在oneOf前边
      {
        //用于 生产环境 性能优化 文件只被处理一次使用 oneOf
        //oneOf  文件只被处理一次 所以需要将 处理js的 loader 提取出来一个
        oneOf:[
          {
            test: /\.css$/,
            use: [
              // 'style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              { // 兼容性处理  css
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-preset-env')(),
                  ],
                },
              },
            ],
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                // 兼容css
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-preset-env')(),
                  ],
                },
              },
              'less-loader',
            ],
          },
          { // js兼容性
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: 3,
                    },
                    targets: {
                      chrome: '60',
                      firefox: '50',
                    },
                  },
                ],
              ],
            },
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              esModule: false,
              outputPath: 'img',
            },
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: /\.(css|less|html|js|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩 html
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],
  // mode 为production 时 就会压缩js
  mode: 'production',
  // mode:'development'
};
