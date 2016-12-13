<template>
    <div class="item" :class="classes" :style="styles">
        <_icon :classes="icon" v-if="icon"></_icon>
        <_content v-if="content">
            <_header slot="header" v-if="content.header">{{content.header}}</_header>
            <div class="description" v-if="content.description" slot="description">{{content.description}}</div>
        </_content>
    </div>
</template>

<script>
    import icon from "./../icon/index"
    import content from "./../content/index"
    import header from "./../header/index"
    export default{
        name:'SeItem',
        props:{
            classes: Object,
            styles:Object,
            icon:Object,
            content:Object
        },
        data(){
            return{
            }
        },

        components:{
            _icon:icon,
            _content:content,
            _header:header,
        }
    }
</script>
