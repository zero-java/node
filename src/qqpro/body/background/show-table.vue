<template>
    <div>
        <table class="ui selectable basic table">
            <thead>
            <tr>
                <th><div class="ui icon button" @click="create"><i class="plus icon"></i></div></th><th>编号</th><th>标题</th><th>发布人</th><th>日期</th><th>浏览量</th>
            </tr>
            </thead>
            <tbody>

            <tr @dblclick="showArticle(article.id)" v-if="articles" v-for="article in articles">
                <td class="collapsing"><div class="ui icon buttons">
                    <div class="ui button" @click="deleteArticle(article.id)"><i class="trash icon"></i></div>
                    <div class="ui button" @click="update(article)"><i class="edit icon"></i></div>
                </div></td>
                <td>{{article.id}}</td>
                <td>{{article.title}}</td>
                <td>{{article.author}}</td>
                <td>{{article.createTime}}</td>
                <td>{{article.visit}}</td>
            </tr>

            </tbody>
        </table>

        <pager ref="pager" :page="data" :showPage="3" @pageItemClick="getPage"></pager>
        <div class="ui article modal">
            <div class="header">{{operateText}}</div>
            <div class="content">
                <article-form :url="url" :operate="operate" :article="article" @updateSuccess="updated" @createSuccess="created"></article-form>
            </div>
        </div>

        <div class="ui article detail modal" v-if="detail" >
            <div class="header">查看文章内容</div>
            <div class="ue content" v-html="detail.content">

            </div>
        </div>

    </div>
</template>

<script>
    import test from "./../../../components/test/Test"
    import pager from "./../../../components/pager/pager.vue"
    import articleForm from "./article-form.vue"
    export default{
        name:'background-table',
        data(){
            return{
                isInit:false,
                loading:false,
                url:'/articles',
                article:{},
                articles:[],
                operateText:'创建文章',
                operate:"create",
                detail:null,
                data:{
                    totalElements:0,
                    first:false,
                    last:false,
                    size:10,
                    number:0,
                    numberOfElements:0,
                    totalPages:0,
                    content:[],
                },
                test:test(8011),
            }
        },
        created(){
            this.getPage(0);
            this.isInit = true;
        },
        methods:{
            getPage(now){
                if(this.loading) {
                    console.colorLog("data is loading returning","orange");
                    return;
                }
                if((this.isInit&&now>this.data.totalPages-1)||now<0){
                    console.colorLog(`table is init ${this.isInit} now[${now}]`,"orange")
                    return;
                }
                let vm = this;
                this.loading =  true;
                this.test.sendGet(`/articles/${now}/${vm.data.size}`,{},function(data){
                    vm.data = data;
                    vm.articles = data.content;
                    vm.loading = false;
                    vm.$nextTick(function(){
                        vm.$refs.pager.refresh();

                    });
                })

            },

            deleteArticle(id){
                let vm = this;
                console.log(`delete ${id}`);
                this.test.sendDelete(`/articles/${id}`,{},function(){
                    vm.reload();
                })
            },

            reload(){
                this.getPage(this.data.number);
            },
            update(article){
                let vm = this;
                this.test.sendGet(`/articles/${article.id}`,{},function(data){
                    vm.operateText="修改文章";
                    vm.$nextTick(function(){
                        vm.operate = 'update';
                        vm.article=data;
                        $(".ui.article.modal").modal("toggle");
                    });
                });

            },
            create(){
                this.$nextTick(function(){
                    this.operate = 'create';
                    this.operateText='创建文章';
                    this.article={};
                    $(".ui.article.modal").modal("toggle");
                })
            },
            created(){
                this.$nextTick(function(){
                    $(".ui.article.modal").modal("toggle");
                    this.reload();
                });
            },
            updated(){
                this.$nextTick(function(){
                    $(".ui.article.modal").modal("toggle");
                    this.reload();
                });
            },
            showArticle(id){
                let vm = this;
                this.test.sendGet(`/articles/${id}`,{},function(data){
                    vm.detail = data;
                    vm.$nextTick(function () {
                        uParse(".ue",{rootPath:'/javascripts/ueditor'});
                        $(".article.detail").modal("toggle");
                    })
                })
            }

        },
        components:{
            pager:pager,
            articleForm:articleForm
        }
    }
</script>
