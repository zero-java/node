<template>
    <div class="ui input" :class="classes" :style="styles">
        <slot></slot>
    </div>
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
