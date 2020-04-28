

const {resolve} =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={

      entry:'./src/index.js',
    output:{
          filename:'build.js',
        path:resolve(__dirname,'build')
    },
    module:{
          rules:[
              {
                  test:/\.less$/,
                  use:['style-loader','css-loader','less-loader']
              }
          ]
    },
    plugins:[
     new HtmlWebpackPlugin({template:'./src/demo.html'})
    ],
    mode:'development',
}