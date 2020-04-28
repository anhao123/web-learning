


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
          }
      ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
   mode:'development',

    devServer:{
        contentBase:resolve(__dirname,'build'),
        //监听 contentBase文件 有变化 就立即 reload
        watchContentBase:true,
        watcherOptions:{
            //忽略监视的文件
           ignore:/node_modules/,
        },
        //域名
        host:'localhost',
        //启用gazip 压缩
        compress:true,
        open:true,
        port:5000,
        //开启HMR
        hot:true,
        //不显示启动服务器的日志信息
        clientLogLevel:'none',
        //除基本信息之外其他信息 不显示
        quiet:true,
        //如果出错了  不要全屏提示
        overlay:false,
        //服务器代理
        proxy:{//5000 收到 /api/xxx  请求时  会转发到 3000服务器
            '/api':{
                target:'http://localhost:3000',
                //发请求时  请求路径 重写  /api/xxx  --> /xxx
                pathRewrite:{
                   '^/api':'',
                }
            }
        }
    }
}