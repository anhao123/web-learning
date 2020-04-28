

const {resolve}=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')


// process.env.NODE_ENV='development';

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // 'style-loader',  提取css 就不能用style-loader
                    MiniCssExtractPlugin.loader,//使用 他来提取css
                    'css-loader',

                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new MiniCssExtractPlugin({
            //引入css 到 HTML文件中  重命名
            filename:'css/index.css'
        })
    ],
    mode:'development'
}
