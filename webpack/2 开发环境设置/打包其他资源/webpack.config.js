

const {resolve} =require('path');
const HtmlWebpackPlugins=require('html-webpack-plugin');


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
            },
            {
                exclude:/\.(css|js|less|html)/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugins({
            template:'./src/demo.html'
        })
    ],
    mode:'development'
}