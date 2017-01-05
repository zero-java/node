/**
 * Created by Administrator on 2017/1/4.
 */

'use strict';






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

