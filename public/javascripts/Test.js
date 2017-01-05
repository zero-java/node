/**
 * Created by Administrator on 2017/1/4.
 */

'use strict';

const sendFunc = XMLHttpRequest.prototype.send,
    openFunc = XMLHttpRequest.prototype.open,
    setFunc = localStorage.setItem,
    getFunc = localStorage.getItem,
    globalObject={
        ajaxListener:[],
    };


function setLocalJSON(k,v){
    globalObject[k]=v;
    setFunc.apply(this,[k,JSON.stringify(v)]);
}

function getLocalJSON(k){
    if(globalObject[k]){
        return globalObject[k];
    }
    let tmp =getFunc.apply(this,[k]);
    try{
        tmp =  JSON.parse(tmp);
    }catch(e){
    }
    return tmp;
}

localStorage.hasOwnProperty("setItem")?(function(){
        //chrome ie

        localStorage.setItem = setLocalJSON;

        localStorage.getItem = getLocalJSON;
    }()):(function(){
        //firefox

        localStorage.__proto__.setItem = setLocalJSON;

        localStorage.__proto__.getItem = getLocalJSON;
    }());



console.colorLog=function(){
    if(arguments.length==2){
        arguments[0]="%c" +arguments[0];
        arguments[1]="color:"+arguments[1];
    }
    console.log(arguments[0],arguments[1]);
};


/**
 * ajax全局监听
 */
XMLHttpRequest.prototype.open=function(){
    let args = arguments;
    this.getSendUrl=function(){
        return args[0]+":"+args[1];
    }
    openFunc.apply(this,arguments);


};
XMLHttpRequest.prototype.send=function(){
    let obj = this,
        start = new Date().getTime(),
        tmp = this.onreadystatechange,
        args = arguments[0];




    let requestInfo = this.getSendUrl()+"         params is ("+decodeURIComponent(args)+")";
    this.onreadystatechange=function(){
        if(tmp){
            tmp.apply(obj,arguments);
        }
        if(obj.readyState==obj.DONE){
            let end = new Date().getTime();
            let offset = end-start;
            if(offset<200){
                console.colorLog(requestInfo+" complete "+(end-start)+"毫秒","green");
            }else if(offset<500){
                console.colorLog(requestInfo+" complete "+(end-start)+"毫秒","blue");
            }else if(offset<1000){
                console.colorLog(requestInfo+" complete "+(end-start)+"毫秒","orange");
            }else{
                console.colorLog(requestInfo+" complete "+(end-start)+"毫秒","red");
            }
            globalObject.ajaxListener.forEach(function(e){
                if(e){
                    e();
                }
            })
        }
    };
    sendFunc.apply(this,arguments);
};

 class Test{
     constructor(port,domain){
         this.prefix = domain||"http://localhost";
         this.port = port||3000;
         this.split = "/";
     }

     getURL(){
         return `${this.prefix}:${this.port}/`
     }

     sendGet(uri,data,hook){
         $.get(this.getURL()+uri,data,function(data){
             if(hook)hook(data);
             console.log(data);
         })

     }

     sendPost(uri,data,hook){
         $.post(this.getURL()+uri,data,function(data){
             if(hook)hook(data);
             console.log(data);
         })
     }




     //=======================spring boot test case=======================
    /**
     * 从request中获取参数
     */
     testRequestParam(){
         this.sendGet("user/lucy/"+new Date(),{real:'小红'},function(data){

         });
     }

    /**
     * 矩阵参数  var;var=value;... same to array and different to map
     */
     testMatrixVariable(){
         this.sendPost("user/pathvariable/23;count=3;date="+new Date()+";date="+new Date()+";date="+new Date(),{real:"from node"})
     }

}

const test = new Test(8000);

