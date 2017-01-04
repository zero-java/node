/**
 * Created by Administrator on 2017/1/4.
 */

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
         this.sendPost("user/path/lucy/"+new Date(),{real:'小红'},function(data){

         });
     }

    /**
     * 矩阵参数  var;var=value;...
     */
     testMatrixVariable(){
         this.sendGet("user/path/23;date="+new Date(),{})
     }

}

const test = new Test(8000);

