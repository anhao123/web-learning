function dongY(wrap){
    var content=wrap.querySelector(".content")
    /* 导航拉动效果 橡皮筋效果 */
    var startY=0,startLeft=0,max=0,lastTime=0,lastPoint=0,times=1,points=0
    wrap.addEventListener("touchstart",function (e) {
        e=e||event
        var touchC=e.changedTouches[0]
        startY=touchC.clientY
        startLeft=css.transform(content,"translateY")
        content.style.transition="none"

        lastTime=new Date().getTime()
        lastPoint=touchC.clientY
        //清除残留
        points=0
        content.handMove=false
    })
    wrap.addEventListener("touchmove",function (e) {
        e=e||event
        var touchC=e.changedTouches[0]
        var nowY=touchC.clientY
        var dix=(nowY-startY)+startLeft
        max=wrap.clientHeight-content.clientHeight
        //快速滑动
        var nowTime=new Date().getTime()
        var nowPoint=touchC.clientY
        points=nowPoint-lastPoint
        times=nowTime-lastTime
        lastPoint=nowPoint
        lastTime=nowTime

        //橡皮筋效果
        var scale=0
        if(dix>0){
            content.handMove=true
            scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+dix)*2);
            dix=css.transform(content,"translateY")+points*scale
        }else if (dix<=max){
            content.handMove=true
            scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+(max-dix))*2);
            dix=css.transform(content,"translateY")+points*scale
        }
        css.transform(content,"translateY",dix)
    })

    wrap.addEventListener("touchend",function () {
        var dix=css.transform(content,"translateY")
        if(!content.handMove){
            //快速滑动
            var speed=points/times
            //避免手动滑动
            speed=Math.abs(speed)<0.6?0:speed
            var target=dix+speed*100
            var time=Math.abs(speed)*0.2
            time=time>1.5?1.5:time
            var bas=""
            if(target>0){
                target=0
                bas="cubic-bezier(.26,1.51,.68,1.54)"
            }else if (target<max){
                target=max
                bas="cubic-bezier(.26,1.51,.68,1.54)"
            }
            css.transform(content,"translateY",target)
            content.style.transition=time+"s "+bas+" transform"
        }else{
            //手动滑动
            content.style.transition="1s transform"
            //橡皮筋效果
            if(dix>0){
                dix=0
                css.transform(content,"translateY",dix)
            }else if (dix<max){
                dix=max
                css.transform(content,"translateY",dix)
            }
        }
    })
}