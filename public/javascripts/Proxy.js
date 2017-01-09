/**
 * Created by Administrator on 2017/1/5.
 */

console.colorLog=function(){
    if(arguments.length==2){
        arguments[0]="%c" +arguments[0];
        arguments[1]="color:"+arguments[1];
    }
    console.log(arguments[0],arguments[1]);
};

/**
 * localStorage 代理
 */
class LocalStorageProxy{
    constructor(){
        if(window.localProxy) throw new Error("exist proxy for localStorage");
        this.nativeSetter = localStorage.setItem;
        this.nativeGetter = localStorage.getItem;
        this.localStorage = localStorage;
        window.localProxy = this;
    }
    setValue(k,v){
        this.nativeSetter.bind(this.localStorage)(k,v);
    }

    getValue(k){
        return this.nativeGetter.bind(this.localStorage)(k)
    }

    /**
     * 设置JSON数据
     * @param k
     * @param v
     */
    setJSON(k,v){
        this.setValue(k,JSON.stringify(v));
    }

    /**
     * 获取JSON数据
     * @param k
     */
    getJSON(k){
        return JSON.parse(this.getValue(k));
    }

}
/**
 * ajax代理
 */
class AjaxProxy{
    constructor(){
        //监听器
        this.listener = {};
        //拦截器
        this.interceptor = {};

        //原生方法
        let nativeSend = XMLHttpRequest.prototype.send;
        let nativeOpen = XMLHttpRequest.prototype.open;
        //代理实例
        XMLHttpRequest.prototype.proxy = this;

        XMLHttpRequest.prototype.open = function(){
            this.proxy.open(this,arguments[0],arguments[1]);
            nativeOpen.apply(this,arguments);
        }
        ;
        XMLHttpRequest.prototype.send = function(){
            this.proxy.send(this,arguments[0]);
            let nativeOnreadystatechange = this.onreadystatechange;
            this.onreadystatechange = function(){
                if(nativeOnreadystatechange) nativeOnreadystatechange.apply(this,arguments);
                this.proxy.readyStateChange(this.readyState,this,arguments);
            };

            nativeSend.apply(this,arguments);
        };

        window.ajaxProxy = this;
    }

    /**
     * 状态改变回掉
     * @param state
     * @param xhr
     * @param params
     */
    readyStateChange(state,xhr,params){
        if(state==xhr.DONE){
            xhr.extra.end = new Date().getTime();
            let [info,color] = this.getRequestInfo(xhr.extra);
            this.log(info,color);
        }
    }

    /**
     * 获取请求信息
     * @param data
     * @returns {[string,*]}
     */
    getRequestInfo(data){
        return [`${data.method} : ${data.url} params is ${data.data} cost ${data.end-data.start}`,this.getInfoColor([data.start,data.end])];
    }

    /**
     * 获取日志颜色
     * @param start
     * @param end
     * @returns {*}
     */
    getInfoColor([start,end]){
        let offset = end-start;
        if(offset<200) return "green";
        else if(offset<500) return "blue";
        else if(offset<1000) return "orange";
        else return "red";
    }

    /**
     * 输出日志
     * @param info
     * @param color
     */
    log(info,color){
        console.colorLog(info,color);
    }

    /**
     * 代理发送
     * @param xhr
     * @param data
     */
    send(xhr,data){
        xhr.extra.data = decodeURIComponent(data);
    }

    /**
     * 代理打开链接
     * @param xhr
     * @param method
     * @param url
     */
    open(xhr,method,url){
        xhr.extra = {
            start:new Date().getTime(),
            method:method,
            url:url,
        };
    }

}

const  _ajaxProxy_ = new AjaxProxy();
const _localProxy_ =new LocalStorageProxy();