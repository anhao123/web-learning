import './an.css';
import './hao.less';
import './style.css';
import print from './print'

console.log('aaaa~~~~~');

print();

if(module.hot){
    module.hot.accept('./print.js',function () {
        //该方法会监听 print.js 的变化  有变化就会执行回调函数 不会构建其他模块
        print();
        console.log('完成')
    })
}

