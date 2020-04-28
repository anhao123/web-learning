/*function ppp(n){
     return n<=2 ? 1:ppp(n-1)+ppp(n-2)
}
  会出现  栈溢出
*/
console.log(this)
 var onmessage=function (e) {
         var number=e.data
       console.log('接受了数据'+number)
       var result=number;
         postMessage(result);
    console.log('发送了数据'+result)
}