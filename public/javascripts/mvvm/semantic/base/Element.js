/**
 * create vue element
 * Created by Administrator on 2016/12/5.
 */


Vue.component("s-div",{
    props:['class','style','events','child','tag'],
    template:'<div class="ui container" :class="[buttonClass]" tabindex="0" style="buttonStyle"></div>',
    data:function(){

        return {
            buttonStyle:$.extend(true,{},this.style,{

            }),
            buttonClass:this.class,

        }
    }
});
