/**
 * create vue element
 * Created by Administrator on 2016/12/5.
 */
var settings={
    props:{
        clazz:String,
        style:Object,
        index:Number
    },
    methods:{
        click:function(){
            this.$emit("click",this.index);
        }
    },

}

Vue.component("i-icon",{
    props:$.extend(true,{},settings.props),
    template:'<i class="icon" @click="click" :class="[clazz]" :style="style"></i>',
    methods:$.extend(true,{},settings.methods)
})
