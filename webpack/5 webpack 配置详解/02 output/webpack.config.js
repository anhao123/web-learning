


const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
/*
* */
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build'),
        // publicPath:'/', //为引入资源 加上公共路径前缀   一般用于 production 服务器端  '/'会以服务器根路径去补充
        chunkFilename:'js/[name]_chunk.js', //指定非入口chunk 的名称  code split 中的 import 和 optimization
        library:'[name]',// 整个库 向外暴露的变量名???
        libraryTarget:'window',  //变量添加到哪  'window'  'node'  'commonjs'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
   mode:'development'
}