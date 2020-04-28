
function animate(dom,obj,fn){
    dom.timer=setInterval(function(){
        var bool=true;
        for(var k in obj){
            if(k=="opacity"){
                var getarr=parseFloat(getarrt(dom,k))*100;
            }else{
                var getarr=parseInt(getarrt(dom,k));
            }
            var speed=(obj[k]-getarr)/10;
            speed= speed>0?Math.ceil(speed):Math.floor(speed);
            if(obj[k]!=getarr){
                 bool=false;
            }
            if(k=="opacity"){
                dom.style.opacity=(getarr+speed)/100;
                dom.style.files="alpha(opacity:"+getarr+speed +")";
            }else{
                dom.style[k]=speed+getarr+"px";
            }
        }
            if(bool){
                clearInterval(dom.timer);
                if(fn){
                    fn.call(dom);
                }
            }

    },30)
}








function getarrt(dom,arr){

    if(dom.currentStyle){
        return dom.currentStyle[arr];
    }else{
        return getComputedStyle(dom,null)[arr];
    }
}
