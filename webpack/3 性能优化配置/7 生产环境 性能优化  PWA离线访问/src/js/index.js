
// import '@babel/polyfill'
import '../css/an.css';
import '../css/hao.less';
import '../css/style.css';


function an(a, b) {
  return a + b;
}
console.log(an(5, 5));


import(/*webpackChunkName:'test'*/'./test')
    .then((result)=>{
        console.log(result)
    }).catch(()=>{
    console.log('加载出错')
});
//注册serviceworker

if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(()=>{
                console.log('success')
            })
            .catch(()=>{
                console.log('fail')
            })
    })
}
