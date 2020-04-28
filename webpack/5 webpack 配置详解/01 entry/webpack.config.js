


const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
/* 一、entry: 分为三种值
       string   单入口 形成一个chunk  输出一个 bundle
              entry:'./src/index.js',
                 output:{
                    filename:'js/[name].js' ,  name 为 main
                    path:resolve(__dirname,'build')
                      },

       Array   多入口    将数组中所有的文件打包到第一个js中  形成一个chunk   并输出一个 bundle
              entry:['./src/index.js','./src/add.js'],
                一般用于 解决 HMR  HTML 文件不能热更新问题  entry:['./src/index.js','./src/index.html'],

       对象： 多入口     形成多个chunk   输出多个 bundle   代码分割
             entry:{
                  index:'./src/index.js',
                  add:'./src/add.js'
                 },
              output:{
                    filename:'js/[name].js',
                    path:resolve(__dirname,'build')
                },
* */
module.exports={
    // entry:'./src/index.js',
    // entry:['./src/index.js','./src/add.js'],
    entry:{
      index:'./src/index.js',
      add:'./src/add.js'
    },
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build')
    },
    plugins:[
        /*new HtmlWebpackPlugin({template:'./src/index.html'})
        *  不写参数 会自动生成 HTML 文件 并引入js
        * */
        new HtmlWebpackPlugin()
    ],
   mode:'development'
}