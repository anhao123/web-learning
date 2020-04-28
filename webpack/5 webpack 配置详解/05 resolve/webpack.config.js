


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
    resolve:{
        alias:{//配置路径别名
            $css:resolve(__dirname,'src/css'),//在入口文件js 中引入可使用
        },
        extensions:[//省略文件后缀名 尽量不用 如果文件名一样的 可能会出错
            //默认的有 'js','json'
            'js','json'
        ],
        modules:[//告诉webpack 解析模块 去找 哪个目录
            resolve(__dirname,'../../node_modules'),'node_modules'
        ]
    }
}