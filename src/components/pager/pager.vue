<template>
    <div class="ui page menu" v-if="page.totalPages>0">
        <a class="item" @click="pageItemClick(0)">首页</a>
        <a class="item" @click="pageItemClick(page.number-1)"><i class="left chevron icon"></i></a>
        <a class="item" :class="{active:n==page.number}"  v-for="n in pages"  @click="pageItemClick(n)">{{n+1}}</a>
        <a class="item" @click="pageItemClick(page.number+1)"><i class="right chevron icon"></i></a>
        <a class="item" @click="pageItemClick(page.totalPages-1)">尾页</a>
    </div>
</template>

<script>
    export default{
        props:{
            page:{
                type:Object,
                required:true
            },
            showPage:{
                type:Number,
                default:3
            }
        },
        page(){
            return{

            }
        },

        data(){
            return {
                pages:[],
            }
        },

        methods:{
            pageItemClick(page){
                this.$emit("pageItemClick",page);
            },
            getPagesArray(){
                //首页
                let showPages = this.showPage*2;
                console.log(this.page.totalPages);
                if(this.page.first){
                    //展示页数超过总页数
                    if(this.page.totalPages<showPages){
                        return this.getRangeArray(0,this.page.totalPages);
                    }else{
                        return this.getRangeArray(0,showPages);
                    }
                }else{
                    let totalPages = this.page.totalPages;
                    let now = this.page.number;
                    let showPage = this.showPage;
                    let min = now-showPage;
                    let max = now+showPage;
                    min = min<0?0:min;
                    max = max>totalPages?totalPages:max;
                    max = min==0&&totalPages>showPages?showPages:max;
                    return this.getRangeArray(min,max);
                }
            },

            refresh(){
               this.pages =  this.getPagesArray();
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
