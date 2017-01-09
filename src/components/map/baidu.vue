<template>
    <div :style="styles" :class="classes" :id="id">

    </div>
</template>
<script>
    export default{
        name:'baidu',
        props:{
            id:{
                type:String,
                required:true,
            },
            height:String,
            x:String,
            y:String,
            styles:Object,
            classes:Object
        },
        data(){
            return{
            }
        },

        methods:{
            init(){

            },

        }

    }
</script>
