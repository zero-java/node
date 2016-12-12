<template>
    <img  :class="classes" :style="styles"/>
</template>
<script>
    export default{
        name:'SeImage',
        props:{
            classes:Object,
            styles:Object
        },
        data(){
            return{

            }
        },
    }
</script>
