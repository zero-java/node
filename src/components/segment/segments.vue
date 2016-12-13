<template>
    <div class="ui segments" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'SeSegments',
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
