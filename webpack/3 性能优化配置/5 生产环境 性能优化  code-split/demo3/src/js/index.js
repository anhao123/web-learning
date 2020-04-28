
// import '@babel/polyfill'
import '../css/an.css';
import '../css/hao.less';
import '../css/style.css';


function an(a, b) {
  return a + b;
}
console.log(an(5, 5));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('完成~~~');
    resolve();
  }, 2000);
});
console.log(promise);

   import(/*webpackChunkName:'test'*/'./test')
   .then((result)=>{
     console.log(result)
   }).catch(()=>{
     console.log('加载出错')
   })