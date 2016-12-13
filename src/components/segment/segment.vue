<template>
    <div class="ui segment" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:'SeSegment',
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
