

const{resolve} =require('path')

module.exports={//webpack 配置
      //入口文件
    entry:'./src/index.js',
     //输出配置
    output:{
            // 输出文件
           filename:'build.js',
          //输出文件的路径
           path:resolve(__dirname,'build')
    },
    // loader 配置
    module:{
        //详细 loader配置
      rules:[
          {
              //正则 检测以 .css 结尾的文件
              test: /\.css$/,
              use:[
                  /*运行顺序 从右往左
                  要下载style-loader   css-loader
                  *style-loader  创建style标签  将js 中的资源插入进去 添加到head标签中生效
                  * css-loader   将css变成commentjs 模块加载到为 js中   内容样式为字符串
                  * */
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              //正则  匹配文件
              test: /\.less$/,
              use: [
                  'style-loader',
                  'css-loader',
                  //需要下载 less less-loader
                  'less-loader'
              ]
          }
      ]
      },
    //插件配置
    plugins:[],
     mode:'development',
}