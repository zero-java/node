<template>
    <div class="ui divider" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name:'SeDivider',
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
