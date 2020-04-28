
// import '@babel/polyfill'
import '../an.css';
import '../hao.less';
import '../style.css';


function an(a, b) {
  return a + b;
}
console.log(an(3, 5));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('完成~~~');
    resolve();
  }, 2000);
});
console.log(promise);
