


const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const TerserWebpackPlugin=require('terser-webpack-plugin')
/*
* */
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/[name].[contenthash:10].js',
        path:resolve(__dirname,'build'),
        chunkFilename:'js/[name]_chunk.[contenthash:10].js'
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
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            /* 这些都是 默认配置
            minSize:30*1024,//分割的chunk最小为 30kb
            maxSize:0,//最大没有限制
            minChunks:1,//要被提取的chunk 至少被引用一次
            maxAsyncRequests:5,//按需加载时 并行加载的文件最大个数
            maxInitialRequests:3,//入口js文件最大并行请求数量
            automaticNameDelimiter:'~',//名称连接符
            name:true,//可以自定义命名规则
            cacheGroups:{//分割chunk 组
                //node_modules 模块会被打包到vendors 组chunk中  输出--> vendors~xxx.js
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    priority:-10,//优先级
                },
                default:{
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk:true,//当前模块 已被打包过了  就会复用  而不会重复打包
                }
            }*/
        },
        runtimeChunk:{//将当前模块 记录的其他模块hash 单独打包 生成一个runtime文件
            name:entrypoint =>`runtime-${entrypoint.name}`
            //用于解决缓存（contenthash）技术中 主js 引用其他文件 会随他的hash 改变而改变
        },
        minimizer:[//配置生产环境的压缩方案  用到插件 terser-webpack-plugin
            new TerserWebpackPlugin({
                cache:true,
                parallel:true,//开启多进程打包
                sourceMap:true,//启动source-map  不然会 被压缩掉
            })
        ]
    },

}