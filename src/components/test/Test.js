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
         this.sendAjax(uri,"get",data,function(data){
             if(hook)hook(data);
             console.log(data);
         });
     }

     sendPost(uri,data,hook){
         this.sendAjax(uri,"post",data,function(data){
             if(hook)hook(data);
             console.log(data);
         });
     }

     sendDelete(uri,data,hook){
         this.sendAjax(uri,"delete",data,function(data){
             if(hook)hook(data);
             console.log(data);
         });
     }

     sendPut(uri,data,hook){
         this.sendAjax(uri,"put",data,function(data){
             if(hook)hook(data);
             console.log(data);
         });
     }

     sendPatch (uri,data,hook){
         this.sendAjax(uri,"patch",data,function(data){
             if(hook)hook(data);
             console.log(data);
         });
     }



     sendAjax(uri,type,data,hook){
         $.ajax({
             url:this.getURL()+uri,
             type:type,
             dataType:'json',
             data:data,
             success:hook,
             error:function(e){
                 if(hook)hook(e);
             },
         })
     }
}

const test = new Test(8000);

 export default function(port,domain){
     if(arguments.length==0) return test;
     if(arguments.length==1) {}return new Test(port);
     return new Test(port,domain);
 };

