


const resolve=require('path').resolve;
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
     entry:'./src/index.js',
    output:{
         filename:'build.js',
        path:resolve(__dirname,'build')
    },
    module:{
         rules:[
             {
                 test:/\.css$/,
                 use:['style-loader','css-loader']
             }
         ]
    },
    plugins:[
        new  HtmlWebpackPlugin({template:'./src/demo.html'})
    ],
    mode:'development',
    devServer:{
         //项目路径
         contentBase:resolve(__dirname,'build'),
        port:3000,
        //启动压缩
         compress:true,
        open:true
    }
}