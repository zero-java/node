/**
 *
 * Created by Administrator on 2016/12/9.
 */


import button from "./components/button/index"
import container from "./components/container/index"
import divider from "./components/divider/index"
import header from "./components/header/index"
import icon from "./components/icon/index"
import image from "./components/image/index"
import input from "./components/input/index"

const components = [
    button,
    button.group,
    container,
    divider,
    header,
    icon,
    image,
    input
];

components.forEach(component=>Vue.component(component.name,component));