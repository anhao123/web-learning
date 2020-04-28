// import add from './add';
import count from './count.js'
import $ from "jquery"

console.log('index.js 文件被加载了');


import (/*webpackChunkName:'add'*/'./add.js').then(({default:add})=>{
 console.log(add(2,3));
})
console.log(count(8,5));
console.log($)
