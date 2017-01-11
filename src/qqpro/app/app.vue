<template>
    <div class="ui fluid container" id="app">
        <navbar></navbar>

    </div>
</template>
<style>

</style>
<script>
    import navbar from "./../navbar/index"
    new Vue({
        el:'#app',
        data:{},
        mounted(){
            $(window).scroll(function(event){
                if($(window).scrollTop()>10){
                    $(".following.bar").addClass("light").find(".menu").removeClass("inverted").find(".animated.button").removeClass("inverted");
                }else{
                    $(".following.bar").removeClass("light").find(".menu").addClass("inverted").find(".animated.button").addClass("inverted");
                }

            });
            $(".pointing.secondary.menu .item").tab();
        },
        methods:{

        },
        components:{
            navbar:navbar
        }
    })
</script>
