<template>
    <div class="ui menu">
        <div class="item" v-for="n in showPages">{{n}}</div>
    </div>
</template>

<script>
    export default{
        props:{
            page:Object,
            required:true
        },
        data(){
            return{

            }
        },

    }
</script>
