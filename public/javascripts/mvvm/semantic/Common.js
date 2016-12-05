/**
 * Semantic 通用组件
 * Created by Administrator on 2016/12/5.
 */


//图片
Vue.component('s-image',{
    props: ['image'],
    template:'<div class="image">' +
    '<img :src="image"/>'+
    '</div>',
    methods:{

    }
});
//描述
Vue.component('description',{
    props: ['description'],
    template:'<div class="description">' +
    '<p v-if="description" v-for="item in description" :data-content="item.text">' +
    '<icon v-if="item.icon" :icon="item.icon"></icon>{{item.text}}' +
    '</p>'+
    '</div>',
});

//元数据
Vue.component('s-meta',{
    props: ['meta'],
    template:'<div class="meta" :style="style" v-if="meta">' +
    '<icon-item v-for="item in meta"  :item="item"><icon-item/>' +
    '</div>'
    ,

    data:function(){
        return {
            style:{
                overflow:'hidden'
            }

        };
    }
});
//附加内容
Vue.component('extra-content',{
    props: ['content'],
    template:'<div class="extra content" v-if="content">' +
    '<icon-item v-for="item in content" :item="item"></icon-item>' +
    '</div>',
});
//内容
Vue.component('s-content',{
    props: ['content'],
    template:'<div class="content" v-if="content">' +
    '<s-header v-if="content.header" :header="content.header"></s-header>' +
    '<s-meta v-if="content.meta" v-for="meta in content.meta" :meta="meta"></s-meta>' +
    '<description v-if="content.description" v-for="des in content.description" :description="des"></description>' +
    '</div>',
});

//头部
Vue.component('s-header',{
    props: ['header'],
    template:'<div class="header" :data-content="header.text">' +
    '<icon :icon="header.icon" :color="header.color"></icon>{{header.text}}' +
    '</div>',
});

//内容项
Vue.component('icon-item',{
    props: ['item'],
    template:'<a @click="click" :class="[clazz.a]" :data-content="description" :href="href" :target="target">' +
    '<icon v-if="icon" :icon="icon" :color="color"></icon><template v-if="text">{{text}}</template>'+
    '</a>',
    data:function(){
        return {
            icon:this.item.icon,
            color:this.item.color,
            text:this.item.text,
            href:this.item.href?this.item.href:"javascript:return",
            clazz:{
                a:this.item.floated?this.item.floated+" floated":""
            },
            description:this.item.des,
            target:'_blank',
        }
    },
    methods:{
        click:function(){
            if(this.item.onClick){
                this.item.onClick(this.item);
            }

        }
    }
}),

    //图标
    Vue.component('icon',{
        props: ['icon','color'],
        template:'<i class="icon" :class="[icon,color]"></i>'
    })
