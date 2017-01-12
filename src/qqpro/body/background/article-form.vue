<template>
        <form class="ui form">
            <div class="field">
                <label>名称</label>
                <input type="text" name="name" placeholder="请输入名称">
            </div>
            <div class="field">
                <label>标题</label>
                <input type="text" name="title" placeholder="请输入标题">
            </div>
            <div class="field">
                <label>作者</label>
                <input type="text" name="author" placeholder="请输入作者">
            </div>
            <div class="field">
                <label>内容</label>
                <input type="text" name="content" placeholder="请输入内容">
            </div>
            <div class="ui button" @click="postData">提交</div>
        </form>

</template>

<script>
    import test from "./../../../components/test/Test"
    export default{
        name:'qq-article-form',
        props:{
            url:{
                type:String,
                required:true
            },
            update:{
                type:Object
            }
        },
        data(){
            return{
                test:test(8011)
            }
        },
        methods:{
            postData(){
                let vm = this;
                let data = $.extend(true,$(this.$el).serializeJSON(),{createTime:new Date(),});
                this.test.sendPost(this.url,data,function(){
                    vm.$emit("createSuccess");
                });

            }
        }

    }
</script>
