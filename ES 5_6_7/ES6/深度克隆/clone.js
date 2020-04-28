;(function (w) {
     function clone(target){
         var result
         if(checkType(target)==='Object'){
              result={}
          }else if(checkType(target)==='Array'){
             result=[]
         }else{
             return target
         }
         for(var k in target){
             if(checkType(target[k])==='Object'|| checkType(target[k])==='Array'){
                 result[k]=clone(target[k])
             }else{
                 result[k]=target[k]
             }
         }
         return result
     }
     function checkType(target){
          return Object.prototype.toString.call(target).slice(8,-1)
     }
     w.clone=clone;
})(window);