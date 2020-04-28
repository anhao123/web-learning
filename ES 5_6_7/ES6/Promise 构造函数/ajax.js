
    ;(function (w) {
        const Ajax=(option)=>{
            let {type,url,data}=option
            let xhr=null;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }else{
                xhr=new ActiveXObject("microsoft.XMLHTTP");
            }
            let Url=geturl(data)
            if(type==='get'){
                xhr.open('get',url+'?'+Url,true) // 打开 第三个参数 可写可不写  默认为true  代表异步请求  否则false为同步
                xhr.send(null);//请求方式为 get时  send中 不传 东西 、、、、 请求方式为 post 时  send中 传要请求的数据
            }else{
                xhr.open('post',url,true) // 打开 第三个参数 可写可不写  默认为true  代表异步请求  否则false为同步
                //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.send(Url);//请求方式为 get时  send中 不传 东西 、、、、 请求方式为 post 时  send中 传要请求的数据
            }

            xhr.onreadystatechange=()=>{//相当于监听 状态码（0 1 2 3 4） 从发请求到成功  此监听一共 调用了 四次
                if(xhr.readyState===4){ // 请求成功 并接收完数据
                    if(xhr.status===200){//接收数据成功
                        option.success(xhr.responseText); //传数据 给option 中的 success方法 以便外部调用
                    }
                }
            }
        }
            geturl=(data)=>{
                let arr=[]
                for(let k in data){
                    arr.push(`${k}=${data[k]}`)
                }
                let url=arr.join('&')
                return url
            }
            // console.log(typeof geturl({uesr:'aaa',name:'20'})); //string

        w.Ajax=Ajax;
    })(window)
