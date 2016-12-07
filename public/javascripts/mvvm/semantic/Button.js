/**
 * Semantic Button
 * Created by Administrator on 2016/12/5.
 */


Vue.component("div-button",{
    props:$.extend(true,{},settings.props),
    template:'<div class="ui button" @click="click" :class="[clazz]" tabindex="0" :style="style"><slot v-if="$slots.default"></slot></div>',
    methods:$.extend(true,{},settings.methods)
});

