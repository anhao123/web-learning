



const {resolve}=require('path')
const webpack=require('webpack')
//打包 第三方库
module.exports={
    entry:{
        jquery:['jquery']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        //向外暴露 的内容的 名字
        library:'[name]_[hash]'
    },
    plugins:[ //打包生成 manifest.json 文件 提供和jQuery的映射关系
        new webpack.DllPlugin({
            name:'[name]_[hash]',
            path:resolve(__dirname,'dll/manifest.json')
        })
    ],
    mode:'production'
}