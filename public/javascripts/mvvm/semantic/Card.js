/**
 * Semantic Card
 *
 * Created by Administrator on 2016/12/5.
 */

    //卡片
Vue.component('s-card',{
    props: ['card'],
    template:'<div class="ui card">' +
    '<s-image v-bind:image="card.image"></s-image>' +
    '<s-content v-for="content in card.contents" :content="content"></s-content>' +
    '<extra-content v-for="extra in card.extras" :content="extra"></extra-content>'+
    '</div>',
});




Vue.component('hot-cards',{
    props: ['cards','title','footer'],
    template:'<div class="ui card">' +
    '<div :class="[menuClass]" v-if="title"><div :class="item">{{title}}</div></div>'+
    '<div :class="dataResult">' +
    '<s-card v-if="cards" v-for="card in cards" :card="card"></s-card>' +
    '</div>' +
    '</div>',
    data:function(){

        return {
            menuClass:'ui pointing secondary teal titled menu floatingRight shadow',
            item:{
                item:true,
                active:true
            },
            dataResult:{
                content:true,
                result:true
            }
        };

    },})

