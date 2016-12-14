<template>
    <div class="item" :class="classes" :style="styles">
        <_icon :classes="icon" v-if="icon"></_icon>
        <template v-if="contentString">{{content}}</template>
        <template v-else>
            <_content v-if="content">
                <_header slot="header" v-if="content.header">{{content.header}}</_header>
                <div class="description" v-if="content.description" slot="description">{{content.description}}</div>
                <_list slot="list" v-if="list" :list="list" :classes="list.classes" :styles="list.styles"></_list>
            </_content>
        </template>
    </div>
</template>

<script>
    import icon from "./../icon/index"
    import content from "./../content/index"
    import header from "./../header/index"
    import list from "./../list/index"
    export default{
        name:'SeItem',
        props:{
            classes: Object,
            styles:Object,
            icon:Object,
            content:[Object,String],
            list:Object
        },
        data(){
            return{
            }
        },

        components:{
            _icon:icon,
            _content:content,
            _header:header,
            _list:list
        },

        computed:{
            contentString:function(){
                return !$.isPlainObject(this.content);
            }
        }
    }
</script>
