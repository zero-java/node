<template>
    <container :classes="classes" :stypes="styles" class="fluid"><slot></slot></container>
</template>

<script>
    import container from './components/container/index'
    export default{
        name:'fluid-container',
        props:{
            classes:Object,
            styles:Object
        },
        data(){
            return{

            }
        },

        components:{
            container:container,
        }
    }
</script>
