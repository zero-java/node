"use strict";

/**
 * create vue element
 * Created by Administrator on 2016/12/5.
 */


var settings = {
    props: {
        clazz: String,
        style: Object,
        index: Number
    },
    methods: {
        click: function click() {
            this.$emit("click", this.index, this.$options._componentTag);
        }
    }

};

Vue.component("i-icon", {
    name: 'i-icon',
    props: $.extend(true, {}, settings.props),
    template: '<i class="icon" @click="click" :class="[clazz]" :style="style"></i>',
    methods: $.extend(true, {}, settings.methods)
});

module.exports = "现在内容来自别的文件";