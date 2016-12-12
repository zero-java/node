<template>
    <div class="ui container" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name:'SeContainer',
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
