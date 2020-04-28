
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: ['./src/index.js','./src/index.html'],
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
    // 开启 HMR 若修改一个模块  就只 更新 这一个模块 而不是 全部更新
    /*css样式文件 在开启HMR后 可以直接使用 因为style-loader 中就有
     js文件  默认不能使用HMR  解决：

     HTML   默认不能使用HMR 但是 一般只有一个html文件 所以可以全部更新
       但是开启 HMR后会有一个小问题  ：HTML无法实时更新  解决 ： 修改入口为  entry: ['./src/index.js','./src/index.html'],
    *
    * */
    hot: true,
  },
  // 调试 代码 优化
  devtool:'eval-source-map'
};
/*[eval-|hidden-|inline-][nosources-][cheap-[module-]]source-map

*
* */