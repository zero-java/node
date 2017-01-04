/**
 * Created by Administrator on 2016/12/16.
 */


export default {
    name:'s-el',
    props:{
        tag:{
            type:String,
            default:'div'
        }
    },
    render(createElement){
       return createElement(this.tag,this.$slots.default);
    }
}


