<template>
    <div class="content">
        <slot name="header"></slot>
        <slot name="description"></slot>
        <slot name="list"></slot>
    </div>
</template>

<script>
    export default{
       name:'SeContent',
        data(){
            return{

            }
        },

    }
</script>
