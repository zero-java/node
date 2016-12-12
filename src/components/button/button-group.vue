<template>
    <div class="ui buttons" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>

    export default {
        name:'SeButtons',
        props:{
            classes:Object,
            styles:Object
        },

        data(){
            return {};
        },

    }

</script>