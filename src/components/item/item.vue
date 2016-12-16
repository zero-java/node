<template>
    <div class="item" :class="classes" :style="styles">
        <_icon_ :classes="icon" v-if="icon"></_icon_>
        <template v-if="contentString">{{content}}</template>
        <template v-else>
            <_content v-if="content">
                <_header slot="header" v-if="content.header">{{content.header}}</_header>
                <div class="description" v-if="content.description" slot="description">{{content.description}}</div>
                <se-list slot="list" v-if="list" :list="list" :classes="list.classes" :styles="list.styles"></se-list>
            </_content>
        </template>
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
            content:[Object,String],
            list:Object
        },
        data(){
            return{
            }
        },

        components:{
            _icon_:icon,
            _content:content,
            _header:header,
        },

        computed:{
            contentString:function(){
                return !$.isPlainObject(this.content);
            }
        }
    }
</script>
