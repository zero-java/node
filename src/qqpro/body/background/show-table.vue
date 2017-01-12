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

        <div class="ui page menu" v-if="data.totalPages>0">
            <a class="item" @click="getPage(0)">首页</a>
            <a class="item" @click="getPage(data.number-1)"><i class="left chevron icon"></i></a>
           <a class="item" :class="{active:n==data.number}"  v-for="n in pages"  @click="getPage(n)">{{n+1}}</a>
            <a class="item" @click="getPage(data.number+1)"><i class="right chevron icon"></i></a>
            <a class="item" @click="getPage(data.totalPages-1)">尾页</a>
        </div>
    </div>
</template>

<script>
    import test from "./../../../components/test/Test"
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
                pages:[],
                showPage:3
            }
        },
        created(){
            this.getPage(0);
            this.isInit = true;
        },
        computed:{
            active:function(){
                return this.data.number+1
            }
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
                    vm.pages = vm.getPagesArray();
                    vm.loading = false;
                })

            },
            getPagesArray(){
                //首页
                let showPages = this.showPage*2;
                if(this.data.first){
                    //展示页数超过总页数
                    if(this.data.totalPages<showPages){
                        return this.getRangeArray(0,this.data.totalPages);
                    }else{
                        return this.getRangeArray(0,showPages);
                    }
                }else{
                    let totalPages = this.data.totalPages;
                    let now = this.data.number;
                    let showPage = this.showPage;
                    let min = now-showPage;
                    let max = now+showPage;
                    min = min<0?0:min;
                    max = max>totalPages?totalPages:max;
                    max = min==0&&totalPages>showPages?showPages:max;
                    return this.getRangeArray(min,max);
                }
            },
            getRangeArray(start,end){
                let array = [];
                for(let x=start;x<end;x++){
                    array.push(x);
                }

                return array;
            }
        }
    }
</script>
