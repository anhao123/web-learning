
const {resolve}=require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
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
                    //'style-loader',
                    //提取css
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    //兼容性问题
                    //第一步 使用postcss-loader
                    {//xiugai postcss-loader 配置
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins: ()=>[
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new MiniCssExtractPlugin({
            filename:'css/index.css'
        }),
        //压缩css的插件
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode:'development'
}
