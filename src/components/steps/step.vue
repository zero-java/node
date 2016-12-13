<template>
    <div class="step" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'SeStep',
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
