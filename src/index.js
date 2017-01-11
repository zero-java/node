/**
 *
 * Created by Administrator on 2016/12/9.
 */


import buttons from "./components/button/index"
import container from "./components/container/index"
import divider from "./components/divider/index"
import header from "./components/header/index"
import icon from "./components/icon/index"
import image from "./components/image/index"
import input from "./components/input/index"
import label from "./components/label/index"
import steps from "./components/steps/index"
import segments from "./components/segment/index"
import reveal from "./components/reveal/index"
import loader from "./components/loader/index"
import list from "./components/list/index"
import element from "./components/element/index"
import sidebar from "./components/sidebar/index"

import test from "./components/test/index"
const components = [
    buttons,
    buttons.Button,
    container,
    container.full,
    divider,
    header,
    icon,
    image,
    input,
    label,
    steps,
    steps.Step,
    segments,
    segments.Segment,
    segments.Segment.Rail,
    reveal,
    loader,
    list,
    element,
    sidebar
];

//test case
test.forEach(e=>components.push(e));

components.forEach(component=>Vue.component(component.name,component));