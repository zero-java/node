/**
 *
 * Created by Administrator on 2016/12/7.
 */


Vue.component("a-label",{
    name:'a-label',
    props:$.extend(true,{},settings.props),
    template:'<a  class="ui label" @click="click" :class="[clazz]" :style="style" ><slot></slot></a>',
    methods:$.extend(true,{},settings.methods)
})