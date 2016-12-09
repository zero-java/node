<template>
    <div class="ui button" @click="onClick" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>

    export default {
            name:'SeButton',
            props:{
                classes:Object,
                styles:Object
            },

            data(){
                return {};
            },

            methods:{
                onClick:function(event){
                    this.$emit("click",event);
                }
            }

    }

</script>