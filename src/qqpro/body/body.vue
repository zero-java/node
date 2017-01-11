<template>
    <div class="ui full segments" style="margin: 0;background-color: gainsboro;">
        <banner :images="images"></banner>

        <!--TODO 轮播?background-->
        <div class="ui full container" style="height: 100%;padding: 3px">
            <div class="ui full grid">
                <div class="full row">
                    <div class="six wide column">
                        <business></business>
                    </div>
                    <div class="ten wide column">
                        <div class="ui segment">
                            <div class="ui pointing secondary menu">
                                <a class="item" data-tab="news">新闻动态</a>
                                <a class="item active" data-tab="ping">评估动态</a>
                            </div>
                            <asses></asses>
                            <news></news>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <_footer></_footer>
    </div>
</template>

<script>
    import asses from './asses.vue'
    import banner from './banner.vue'
    import business from './business.vue'
    import footer from './footer.vue'
    import news from './news.vue'
    export default{
        name:'qq-content',
        props:{
            images:Array
        },
        data(){
            return{

            }
        },
        components:{
            asses:asses,
            banner:banner,
            business:business,
            _footer:footer,
            news:news
        }
    }
</script>
