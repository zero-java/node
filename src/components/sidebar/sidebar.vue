<template>
    <div class="sidebar menu" :class="classes" :style="styles">
        <item v-if="items" v-for="item in items" :icon="item.icon" :content="item.content"></item>
    </div>
</template>

<script>
    import item from "./../item/index"
    export default{
        name:'seSidebar',
        props:{
            items:{
                type:Array
            },
            classes:Object,
            styles:Object
        },
        data(){
            return {}
        },
        components:{
            item:item
        }
    }
</script>
