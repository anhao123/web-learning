;(function () {
    var mask=document.querySelector(".head>.mask")
    var menuBtn=document.querySelector(".head>.head-top>.menuBtn")
    var flag=true
     menuBtn.addEventListener("touchstart",function (e) {
         e=e||event
         var touchC=e.changedTouches[0]
         if(flag){
             menuBtn.classList.add("active")
             mask.style.display="block"
         }else{
             menuBtn.classList.remove("active")
             mask.style.display="none"
         }
         flag=!flag
         e.stopPropagation()
         /*哪里阻止了冒泡一定要在哪里阻止默认事件*/
         e.preventDefault()
     })
    document.addEventListener("touchstart",function () {
        if(!flag){
            menuBtn.classList.remove("active")
            mask.style.display="none"
            flag=!flag
        }
    })
    mask.addEventListener("touchstart",function (e) {
          e=e||event
        e.stopPropagation()
        /*哪里阻止了冒泡一定要在哪里阻止默认事件*/
        e.preventDefault()
    })
})()