/**
 *
 * Created by Administrator on 2016/12/7.
 */


Vue.component('sidebar',{
    props:{
        c:{
            type:[String,Object],
            default:function(){
                return {
                    inverted:true,
                    vertical:true
                };
            }
        },
        s:Object,
        i:Array,
        current:{
            type:String,
            default:'s-item-a'
        }
    },
    template:'<div class="ui sidebar menu" :class="clazz" :style="style"><component :is="currentItem" @click="itemClick" v-if="items" v-for="item in items"  :options="item"></component></div>',
    data:function(){
        return {
            clazz:this.c,
            style:this.s,
            items:this.i,
            currentItem:this.current,
        }
    },
    methods:{
        itemClick:function(){
            $(this.$el).sidebar("toggle");
        }
    }

})