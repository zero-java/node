<template>
    <div style="background-color: #8a8a8a;height: 700px;padding-top: 17.5em;padding-bottom: 4em">
        <div class="ui swiper-container container" id="banner" style="height: 100%">
            <div  class="swiper-wrapper" style="height: 100%" v-if="images">
                <div class="swiper-slide" v-for="image in images" :style="{backgroundSize:cover,backgroundImage:'url('+image+')'}"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        name:'qq-banner',
        props:{
            images:Array
        },
        data(){
            return {


            }
        },
        mounted(){
            new Swiper('#banner', {
                loop: true,

                // 如果需要分页器
                pagination: '#banner .swiper-pagination',

                // 如果需要前进后退按钮

                // 如果需要滚动条
                slidesPerView: 'auto',
                autoplay: 5000,
                speed: 2000,
                touchRatio: 0.2,
                mousewheelControl: true,
            });
        }

    }

</script>
