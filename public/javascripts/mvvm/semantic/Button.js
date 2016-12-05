/**
 * Semantic Button
 * Created by Administrator on 2016/12/5.
 */


Vue.component("s-button",{
    props:['class','style'],
    template:'<div class="ui button" :class="[buttonClass]" tabindex="0" style="buttonStyle"></div>',
    data:function(){

        return {
            buttonStyle:$.extend(true,{},this.style,{

            }),
            buttonClass:this.class
        }
    }
});

