<template>
    <div class="ui tab active segment" data-tab="news">
        <div class="ui divided selection items">
            <div class="item">
                <div class="content">
                    <a class="header">新闻动态</a>
                    <div class="meta">
                        <span>新闻动态</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                    <div class="extra">新闻动态 </div>
                </div>
            </div>
            <div class="item">

                <div class="content">
                    <a class="header">新闻动态</a>
                    <div class="meta">
                        <span>新闻动态</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                    <div class="extra">新闻动态 </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
 export default{
     name:'qq-news',
     data(){},
     mounted(){
         $(".pointing.secondary.menu .item").tab("change tab","news");
     }
 }
</script>
