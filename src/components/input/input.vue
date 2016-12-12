<template>
    <div class="ui input" :class="classes" :style="styles">
        <slot></slot>
    </div>
    <img  :class="classes" :style="styles"/>
</template>
<script>
    export default{
        name:'SeInput',
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
