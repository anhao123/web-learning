
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css处理
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

//pwa 离线可访问 下载 插件 workbox-webpack-plugin

const WorkboxWebpackPlugin=require('workbox-webpack-plugin')

// 设置环境变量 css兼容处理 （走的是开发环境 还是 生产环境 默认是生产环境）
// process.env.NODE_ENV='development'
/*代码分割*/
module.exports = {
  //如果是单页面应用  只有一个入口文件  但也想将某个文件单独输出  就加写js 代码 import('')
  //懒加载  是使用 js代码实现  他是有条件触发时 才进行加载 例如点击事件 回调中加载
  entry: './src/js/index.js',
  /*entry:{//多入口
     index:'./src/js/index.js',
    test:'./src/js/test.js'
  },*/
  output: {
    filename: 'js/[name].[contenthash:10].js',
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
              //开启babel缓存 使其第二次打包速度更快
              //第二次构建时 会读取之前的代码
              //文件缓存 三种 哈希值  hash contenthash chunkhash
              cacheDirectory:true,
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
      filename: 'css/index.[contenthash:10].css',
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
      //PWA
      new WorkboxWebpackPlugin.GenerateSW({
         //帮助 serviceworker 快速启动
        // 删除旧的serviceworker   生成一个 serviceworker 配置文件
         clientsClaim:true,
        skipWaiting:true
      }),
  ],
  //会将 js中引入的 node_modules 单独打包一个chunk 并输出
  //如果 多个入口文件 都引用同一个文件  optimization  他也会将此单独打包（只打包一次）
  /*optimization:{
    splitChunks:{
      chunks:'all'
    }
  },*/
  // mode 为production 时 就会压缩js
  mode: 'production',
  // mode:'development'
};
