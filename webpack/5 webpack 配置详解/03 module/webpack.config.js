


const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
/*
* */
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build'),
    },
    module:{
      rules:[
          {
              test:/\.css$/,
              //多个loader时用use
              use:['style-loader','css-loader']
          },{
             test:/\.js$/,
              //排除 node_modules
              exclude:/node_modules/,
              //优先执行
              enforce:'pre',
              //延后执行
              // enforce:'post',
              //使用一个loader时
              loader:'eslint-loader',
              options:{
                 fix:true
              }
          },
          {
              oneOf:[//优化打包速度
                  {
                  }
              ]
          },
      ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
   mode:'development'
}