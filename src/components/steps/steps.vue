<template>
    <div class="ui steps" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'SeSteps',
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
