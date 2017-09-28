<template>
<div>
    <swipe :data="data1"></swipe>
	 <ul class="goods">
        <router-link :to="'/pathre/'+item.id" tag='li' v-for='item in fn'>
            <img :src="item.img[0]" alt="">
            <p>{{item.tit}}</p>
            <span>￥{{item.price}}</span>
        </router-link>
    </ul>
</div>
</div>
</template>
<script>
import swipe from '../components/swipe'
export default{
    data(){
        return{
            fn:'',
            data1:[
                {'img':'./static/images/kitchen1.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/kitchen2.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/kitchen3.jpg'
                    // 'span':刷刷地址
                }
            ]
        }
    },
    created(){
        this.arr()
    },
    methods:{
        arr(){
            this.$http.get('static/json/kitchen.json')
                .then(
                    function(res){
                        this.fn=res.body

                    },
                    function(ree){
                        console.log(404)
                    }
                )
        }
    },
    components:{
        swipe
    }
}
</script>
<style scoped>
	.goods{text-align: center;}
    .goods li{float:left;margin:.15rem;font-size: .26rem;}
    .goods li p{width:2.8rem;padding:0 .32rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
    .goods li:nth-last-of-type(1){margin-bottom:1.2rem}
    .goods li img{width:3.44rem;height:3.44rem;border-radius: .08rem;}
    .goods li span{color:#fd888b;}
</style>