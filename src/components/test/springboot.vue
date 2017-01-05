<template>
    <div>
        <se-divider class="horizontal"><i class="clock icon"></i>spring boot 测试案例</se-divider>
        <se-buttons :class="{primary:true}">
            <se-button @click="testRequestParam">测试@RequestParam</se-button>
            <se-button @click="testMatrixVariable">测试@MatrixVariable</se-button>
        </se-buttons>
    </div>

</template>

<script>
    import test from "./Test"
    import proxy from "./../proxy/Proxy"
    export default{
        name:'spring-boot-test',
        data(){
            return{
                test:test
            }
        },
        methods:{
            testRequestParam(){
                this.test.sendGet("user/lucy/"+new Date(),{real:'小红'},function(data){

                });
            },
            testMatrixVariable(){
                this.test.sendPost("user/pathvariable/23;count=3;date="+new Date()+";date="+new Date()+";date="+new Date(),{real:"from node"})
            }
        }

    }
</script>
