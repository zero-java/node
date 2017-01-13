<template>
        <form class="ui form">
            <input type="hidden" name="id" :value="article.id">
            <div class="field">
                <label>名称</label>
                <input type="text" name="name" placeholder="请输入名称" :value="article.name">
            </div>
            <div class="field">
                <label>标题</label>
                <input type="text" name="title" placeholder="请输入标题" :value="article.title">
            </div>
            <div class="field">
                <label>作者</label>
                <input type="text" name="author" placeholder="请输入作者" :value="article.author">
            </div>
            <div class="field">
                <label>内容</label>
                <input type="text" name="content" placeholder="请输入内容" :value="article.content">
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
            operate:{
                type:String,
                required:true
            },
            article:{
                type:Object,
                default:function(){
                    return {}
                }
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
                if(this.operate=="create"){
                    this.create(data,function(){
                        vm.$emit("createSuccess");
                    })
                }
                if(this.operate=="update"){
                    this.create(data,function(){
                        vm.$emit("updateSuccess");
                    })
                }
            },

            create(data,hook){
                this.test.sendPost(this.url,data,hook);
            },
            update(data,hook){
                this.test.sendPut(this.url,data,hook);
            }
        }

    }
</script>
