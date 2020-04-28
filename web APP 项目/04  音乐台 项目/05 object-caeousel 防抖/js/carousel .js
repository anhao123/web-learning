;(function (w) {
    function transform(node,type,val){
        //1、判断 是否有参数 使用对象存值
        if (typeof node==="object"&&typeof node[transform]==="undefined"){
            node[transform]={}
        }
        if (arguments.length>=3){
            node[transform][type]=val
            var text=''
            for(var item in node[transform]){
                if (node[transform].hasOwnProperty(item)){
                    switch (item) {
                        case "translateX":
                        case "translateY":
                            text+=item+"("+node[transform][item]+"px)"
                            break;
                        case "scale":
                            text+=item+"("+node[transform][item]+")"
                            break;
                        case "rotate":
                            text+=item+"("+node[transform][item]+"deg)"
                            break;
                    }
                }
            }
            node.style.transform=node.style.webkitTransform=text
        }else if (arguments.length===2){
            //取值
            val=node[transform][type]
            if(typeof val==="undefined"){
                switch (type) {
                    case "translateX":
                    case "translateY":
                    case "rotate":
                        val=0
                        break;
                    case "scale":
                        val=1
                        break;
                }
            }
            return val
        }
    }
    function carousel(arr){
        var carouseWrap=document.querySelector(".carouse-wrap")
        var pointLength=arr.length
        if(carouseWrap){
            //无缝
            var need=carouseWrap.getAttribute("needcarousel")==null?false:true
            if (need) {
                arr=arr.concat(arr)
            }
            var ulNode=document.createElement("ul")
            var styleNode=document.createElement("style")
            for(var i=0;i<arr.length;i++){
                ulNode.innerHTML+='<li><a href="javascript: ;"><img src="'+arr[i]+'" alt="0'+(i+1)+'"/></a></li>'
            }
            ulNode.className='list'
            styleNode.innerHTML=".carouse-wrap>.list{width: "+arr.length*100+"%} .carouse-wrap>.list>li{width: "+1/arr.length*100+"%}"
            document.head.appendChild(styleNode)
            carouseWrap.appendChild(ulNode)
            //querySelector  的坑 只获取静态列表信息
            var img=document.querySelector(".carouse-wrap>.list>li>a>img")
            setTimeout(function(){
                carouseWrap.style.height=img.offsetHeight+"px"
            },100)

            var carousePoint=document.querySelector(".carouse-wrap > .carouse-point")
            if(carousePoint){
                for(var i=0;i<pointLength;i++){
                    if(i===0){
                        carousePoint.innerHTML+='<span class="active"></span>'
                    }else{
                        carousePoint.innerHTML+='<span></span>'
                    }
                }
            }
            //获取 span
            var span=document.querySelectorAll(".carouse-wrap>.carouse-point>span")
            /*
            * 点击时的位置 及ul左偏移量
            * 移动时 的位置
            * */
            var clientX,elementX,left,clientY,elementY,disY;
            var index=0  /*切换抽象*/
            var first=true,shakeFirst=true;
            carouseWrap.addEventListener("touchstart",function (e) {
                var e=e||event
                var touch1=e.changedTouches[0]
                ulNode.style.transition="none"
                //无缝
                if (need) {
                    var index=css.transform(ulNode,"translateX")/document.documentElement.clientWidth
                    if(-index===0){
                        index=-pointLength
                    }else if (-index===arr.length-1){
                        index=-(pointLength-1)
                    }
                    css.transform(ulNode,"translateX",index*document.documentElement.clientWidth)
                }

                clientX=touch1.clientX
                elementX=css.transform(ulNode,"translateX")
                clientY=touch1.clientY
                elementY=css.transform(ulNode,"translateY")
                //重置
                first=true;shakeFirst=true;
                clearInterval(timer);
            })
            carouseWrap.addEventListener("touchmove",function (e) {

                if(!first){//防抖
                    return;
                }

                var e=e||event
                var touch1=e.changedTouches[0]
                var nowX=touch1.clientX
                var nowY=touch1.clientY
                left=nowX-clientX
                disY=nowY-clientY
                //防抖
                if(shakeFirst){
                    shakeFirst=false
                    if(Math.abs(disY)>Math.abs(left)){
                     first=false
                    }
                    return;
                }

                css.transform(ulNode,"translateX",left+elementX)
            })

            carouseWrap.addEventListener("touchend",function (e) {
                var e=e||event
                index=css.transform(ulNode,"translateX")/document.documentElement.clientWidth
                index=Math.round(index)//滑到一半时就切换 四舍五入
                if (index>0){
                    index=0
                }else if(index<1-arr.length){
                    index=1-arr.length
                }
                //小圆点
                point(index)
                ulNode.style.transition="0.5s transform"
                css.transform(ulNode,"translateX",index*document.documentElement.clientWidth)
                //启动自动
                if (needzidong) {
                    auto()
                }
            })

            /*var index=0*/
            var timer=0
            //zidong
            var needzidong=carouseWrap.getAttribute("needzidong")==null?false:true
            if (needzidong) {
                auto()
            }
            function auto() {
                clearInterval(timer)
                timer=setInterval(function () {
                    if (index===1-arr.length){
                        index=1-arr.length/2
                        ulNode.style.transition="none"
                        css.transform(ulNode,"translateX",index*document.documentElement.clientWidth)
                    }
                    setTimeout(function () {
                        index--
                        ulNode.style.transition="0.5s transform"
                        //小圆点
                        point(index)
                        css.transform(ulNode,"translateX",index*document.documentElement.clientWidth)
                    },30)
                },2000)
            }
            //point
            function point(index) {
                if(!carousePoint){
                    return 0;
                }
                for(var i=0;i<span.length;i++){
                    span[i].classList.remove("active")
                }
                span[-index%pointLength].classList.add("active")
            }

        }
    }
    function navDong(){
        var nav=document.querySelector(".drap-nav")
        var ul=document.querySelector(".drap-nav .list")
        /* 导航拉动效果 橡皮筋效果 */
        var startX=0,startLeft=0,max=0,lastTime=0,lastPoint=0,times=1,points=0
        nav.addEventListener("touchstart",function (e) {
            e=e||event
            var touchC=e.changedTouches[0]
            startX=touchC.clientX
            startLeft=css.transform(ul,"translateX")
            ul.style.transition="none"

            lastTime=new Date().getTime()
            lastPoint=touchC.clientX
            //清除残留
            points=0
        })
        nav.addEventListener("touchmove",function (e) {
            e=e||event
            var touchC=e.changedTouches[0]
            var nowX=touchC.clientX
            var dix=(nowX-startX)+startLeft
            max=nav.clientWidth-ul.clientWidth
            //快速滑动
            var nowTime=new Date().getTime()
            var nowPoint=touchC.clientX
            points=nowPoint-lastPoint
            times=nowTime-lastTime
            //同步
            lastPoint=nowPoint
            lastTime=nowTime

            //橡皮筋效果
            var scale=0
            if(dix>0){
                ul.handMove=true
                scale=document.documentElement.clientWidth/((document.documentElement.clientWidth+dix)*2);
                dix=css.transform(ul,"translateX")+points*scale
            }else if (dix<=max){
                ul.handMove=true
                scale=document.documentElement.clientWidth/((document.documentElement.clientWidth+(max-dix))*2);
                dix=css.transform(ul,"translateX")+points*scale
            }
            css.transform(ul,"translateX",dix)
        })

        nav.addEventListener("touchend",function () {
            var dix=css.transform(ul,"translateX")
            if(!ul.handMove){
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
                css.transform(ul,"translateX",target)
                ul.style.transition=time+"s "+bas+" transform"
            }else{
                //手动滑动
                ul.style.transition="1s transform"
                //橡皮筋效果
                if(dix>0){
                    dix=0
                    css.transform(ul,"translateX",dix)
                }else if (dix<max){
                    dix=max
                    css.transform(ul,"translateX",dix)
                }
                ul.handMove=false
            }
        })
    }
    w.css={transform,carousel,navDong}
})(window)