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
}

const test = new Test(8000);

 export default function(port,domain){
     if(arguments.length==0) return test;
     if(arguments.length==1) return new Test(port);
     return new Test(port,domain);
 };

