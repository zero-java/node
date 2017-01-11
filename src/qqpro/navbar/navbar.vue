<template>
    <fluid-container>
        <div class="following bar">
            <container>
                <header><img :src="log" class="ui logo image">{{description}}</header>
            </container>
            <container :classes="{nav:true}">
                <div class="ui large secondary network menu">
                    <template v-if="buttons" v-for="button in buttons">
                        <div class="item">
                            <se-button :classes="buttonClasses" @click="navButtonClick">
                                <div class="visible content"><se-icon :></se-icon><i classes="button.icon"></i></div>
                                <div class="hidden content">{{button.text}}</div>
                            </se-button>
                        </div>
                    </template>
                </div>
            </container>

        </div>
    </fluid-container>
</template>
<style>

</style>
<script>
    import settings from "./../settings/Settings";
    import container from "./components/container/index";
    import header from "./components/header/index";
    export default {
        name:'qq-nav',
        props:{
            logo:{
                type:String,
                default:settings.default.logo,
            },
            buttons:{
                type:Array,
                required:true,
                default:function(){
                    return [
                        {
                            icon:{home:true},
                            text:'首页'
                        },
                        {
                            icon:{info:true},
                            text:'关于信欧'
                        },
                        {
                            icon:{newspaper:true},
                            text:'新闻动态'
                        },
                        {
                            icon:{flag:true},
                            text:'政策法规'
                        },
                        {
                            icon:{bookmark:true},
                            text:'成功案例'
                        },
                        {
                            icon:{phone:true},
                            text:'联系我们'
                        },

                    ]
                }
            },
            description:String


        },
        data(){
            return {
                settings:settings,
                buttonClasses:{
                    inverted:true,
                    animated:true,
                    basic:true
                }
            }
        },
        methods:{
            navButtonClick:function(){
                console.log($(this).find('hidden').text());
            }
        },
        components:{
            container:container,
            header:header,
            fullContainer:container.full
        }
    }

</script>
