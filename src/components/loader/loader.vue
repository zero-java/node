<template>
            <div class="ui loader" :class="classes" :style="styles">{{text}}</div>
</template>
<script>
    export default{
        name:'SeLoader',
        props:{
            classes:{
                type:Object,
                default:{
                    active:false,
                }
            },
            styles:Object,
            text:{
                type:String,
                default:function(){
                    if(this.classes.text) return "loading";
                }
            }
        },
        data(){
            return{

            }
        },

    }
</script>
