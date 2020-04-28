

const {resolve} =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')

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
            },
            {//处理图片
                test: /\.(jpg|.png|.gif)$/,
                loader:'url-loader',
                options:{
                    //图片的条件
                    limit:8*1024,
                     //解决 url-loader 与html-loader两种图片处理 loader 产生的问题
                    // url-loader  是默认es6模块解析  而html-loader是 commonjs解析  解决方法是 关闭 url-loader的es6模块解析
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/demo.html'
        })
    ],
    mode:'development'
}