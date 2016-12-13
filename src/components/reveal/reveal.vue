<template>
    <div class="ui reveal" :class="classes" :style="styles">
        <div class="visible content"><slot name="visible"></slot></div>
        <div class="hidden content"><slot name="hidden"></slot></div>
    </div>
</template>
<script>
    export default{
        name:'SeReveal',
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
