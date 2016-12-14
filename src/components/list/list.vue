<template>
            <div class="ui list" :class="classes" :style="styles" v-if="list&&list.items">
                <item v-for="item in list.items" :classes="item.classes" :styles="item.styles" :icon="item.icon" :content="item.content" :list="item.list"></item>
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
            list:Object
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
