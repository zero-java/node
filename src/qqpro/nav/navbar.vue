<template>
    <container :class="{fluid:true}">
        <div class="following bar">
            <container>
                <_header :classes="{huge:true}"><img :src="logo" class="ui logo image">{{description}}</_header>
            </container>
            <container :classes="{nav:true}">
                <div class="ui large secondary network menu">
                    <template v-if="buttons" v-for="button in buttons">
                        <div class="item">
                            <se-button :classes="buttonClasses" @click="navButtonClick">
                                <div class="visible content"><se-icon :classes="button.icon"></se-icon></div>
                                <div class="hidden content">{{button.text}}</div>
                            </se-button>
                        </div>
                    </template>
                </div>
            </container>

        </div>
    </container>
</template>
<style>

</style>
<script>
    import settings from "../settings/Settings";
    import container from "../../components/container/index";
    import header from "../../components/header/index";
    export default {
        name:'qq-nav',
        props:{
            logo:{
                type:String,
                default:settings.default.logo,
            },
            buttons:{
                type:Array,
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
            description:{
                type:String,
                default:"江苏信欧风险评估咨询有限公司"
            }


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
            _header:header,
            fullContainer:container.full
        },
        mounted(){
            $(window).scroll(function(event){
                if($(window).scrollTop()>10){
                    $(".following.bar").addClass("light").find(".menu").removeClass("inverted").find(".animated.button").removeClass("inverted");
                }else{
                    $(".following.bar").removeClass("light").find(".menu").addClass("inverted").find(".animated.button").addClass("inverted");
                }

            })
        }
    }

</script>
