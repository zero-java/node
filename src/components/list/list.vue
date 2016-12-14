<template>
            <div class="ui list" :class="classes" :style="styles" v-if="items">
                <item v-for="item in items" :icon="item.icon" :content="item.content" :list="item.list"></item>
            </div>
</template>
<script>
    import item from "./../item/index"
    import icon from "./../icon/index"
    export default{
        name:'SeList',
        props:{
            classes:Object,
            styles:Object,
            items:Array
        },
        data(){
            return{
            }
        },
        components:{
            item:item,
        }

    }
</script>
