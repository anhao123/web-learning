
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// process.env.NODE_ENV='development';
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',  提取css 就不能用style-loader
          MiniCssExtractPlugin.loader, // 使用 他来提取css
          'css-loader',
          /* 第二步需要在 package.json 中设置 浏览器 兼容版本  默认是生产环境  修改到 开发环境需要 设置
                    process.env.NODE_ENV='development';
                  "browserslist": {
                                  "development": [
                                    "last 1 chrome version",
                                    "last 1 firefox version",
                                    "last 1 safari version"
                                  ],
                                  "production": [
                                    ">0.2%",
                                    "not dead",
                                    "not op_mini all"
                                  ]
                                } */
          // postcss-loader postcss-preset-env  兼容css首先要下载两个
          // 不能直接使用 postcss-loader  需要修改 其配置
          {
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({
      // 引入css 到 HTML文件中  重命名
      filename: 'css/index.css',
    }),
  ],
  mode: 'development',
};
