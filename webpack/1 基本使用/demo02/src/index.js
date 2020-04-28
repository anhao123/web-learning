
import './index.less'


function f(a,b) {
   return a+b
}
// webpack ./src/index.js -o ./build/build.js --mode=development   开发环境  webpack 在没有写配置文件的时候 的运行指令
// //  webpack ./src/index.js -o ./build/build.js --mode=production  生产环境   webpack 在没有写配置文件的时候 的运行指令
// //  webpack 只能编译 js / json 文件  而css less img 等 不能识别 并打包成功
console.log(f(2,3))
