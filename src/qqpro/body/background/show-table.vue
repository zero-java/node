<template>
    <div>
        <table class="ui celled striped table">
            <thead>
            <tr>
                <th>编号</th><th>标题</th><th>发布人</th><th>内容</th><th>日期</th><th>浏览量</th>
            </tr>
            </thead>
            <tbody>

            <tr v-if="articles" v-for="article in articles">

                <td>{{article.id}}</td>
                <td>{{article.title}}</td>
                <td>{{article.author}}</td>
                <td>{{article.content}}</td>
                <td>{{article.createTime}}</td>
                <td>{{article.visit}}</td>
            </tr>

            </tbody>
        </table>

        <pager ref="pager" :page="data" :showPage="3" @pageItemClick="getPage"></pager>
    </div>
</template>

<script>
    import test from "./../../../components/test/Test"
    import pager from "./../../../components/pager/pager.vue"
    export default{
        name:'background-table',
        data(){
            return{
                isInit:false,
                loading:false,
                articles:[],
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

        },
        components:{
            pager:pager
        }
    }
</script>
