

const {resolve}=require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/index.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                /*第一种 做js 基本的兼容处理 使用babel-loader  @babel/preset-env  依赖于@babel/core
                    但不能 兼容 es6 高级语法
                  第二 暴力法  使用 @babel/polyfill  只要在 js文件中引入即可
                    但是 体积太大  不能按需加载
                  第三按需加载  core-js 库
                * */
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    //预设 ：知识babel 做怎样的兼容性处理
                    /*presets:[
                        '@babel/preset-env'
                    ]*/
                    //按需加载写法
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                //按需加载
                                useBuiltIns:'usage',
                                //指定 core-js版本
                                corejs:{
                                    version:3
                                },
                                //指定兼容性做到那个版本的浏览器
                                targets:{
                                    chrome:'60',
                                    firefox:'50',
                                    safari:'10',
                                    ie:'9',
                                    edge:'17'
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ],
    mode:'development'
}

