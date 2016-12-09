'use strict';

/**
 * Semantic Button
 * Created by Administrator on 2016/12/5.
 */

Vue.component("div-button", {
  name: 'div-button',
  props: $.extend(true, {}, settings.props),
  template: '<div class="ui button" @click="click" :class="[clazz]" tabindex="0" :style="style"><slot></slot></div>',
  methods: $.extend(true, {}, settings.methods)
});

Vue.component("div-buttons", {
  name: 'div-buttons',
  props: $.extend(true, {}, settings.props),
  template: '<div class="ui buttons" @click="click" :class="[clazz]" tabindex="0" :style="style"><slot></slot></div>',
  methods: $.extend(true, {}, settings.methods)
});