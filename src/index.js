/**
 *
 * Created by Administrator on 2016/12/9.
 */


import button from "./components/button/index"

const components = [button];

components.forEach(component=>Vue.component(component.name,component));