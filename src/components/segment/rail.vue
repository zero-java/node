<template>
    <div class="ui rail" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'SeRail',
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
