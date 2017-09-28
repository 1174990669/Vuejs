<template>
	<div style="padding-bottom: 1rem;">
		<swipe :data="data1"></swipe>
		<div class="desc">
            <span>
                <img src="../../static/images/sure.png" alt="">欧美质量标准
            </span>
            <span>
                <img src="../../static/images/sure.png" alt="">30天无忧退货
            </span>
            <span>
                <img src="../../static/images/sure.png" alt="">24小时发货
            </span>
        </div>
        <div class="west-life">
            <h2>欧美生活直通车</h2>
            <div class="west-box">
                <router-link to='/dan' tag='div' class="left">
                    <img src="../../static/images/life1.png" alt="">
                </router-link>
                <div class="right">
                    <router-link to='/mer'>
                        <img src="../../static/images/life2.png" alt="">
                    </router-link>
                    <router-link to='/fa'>
                        <img src="../../static/images/life3.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="new-goods">
            <h2>新品上市</h2>
            <ul>
                <router-link v-bind:to="'/page/'+item.id" tag='li' v-for='item in fn'>
                    <img :src="item.img[0]" alt="">
                    <p >{{item.tit}}</p>
                    <span>￥{{item.price}}</span>
                </router-link>
            </ul>
            <p class="more">查看所有新品 ></p>
        </div>
        <div class="time">
            <h2>周二周五.限时秒杀</h2>
            <p class="time1"><img src="../../static/images/time.png" alt="">05月23日 周二 11:00-11:30</p>
            <ul>
                <li v-for='item in fn'>
                    <router-link v-bind:to="'/page/'+item.id">
                        <img :src="item.img[2]" alt="" class="left">
                    </router-link>
                    <div class="right">
                        <p>{{item.tit}}</p>
                        <p>
                            <span class="unline">￥{{item.price}}</span>
                            <span class="line">￥{{item.yuan}}</span>
                        </p>
                        <span class="btn">
                            <img src="../../static/images/cart.png" alt="">
                            <em>{{item.em}}</em>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="like">
            <h2>猜你喜欢</h2>
            <li v-for='item in fn'>
                <router-link v-bind:to="'/page/'+item.id">
                    <img :src="item.img[1]" alt="">
                </router-link>
                <h3>{{item.tit}}</h3>
                <p class="like-desc">创意现代简约个性玻璃书桌灯，遥控调光台灯，陪伴书桌阅读时光的美好瞬间。</p>
                <p class="price"><span>￥{{item.price}}</span><span>购买</span></p>
            </li>
        </div>
	</div>
</template>
<script>
import swipe from '../components/swipe'
export default{
	data(){
		return{
            fn:'',
            two:'',
			data1:[
                {'img':'./static/images/recommend1.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/recommend2.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/recommend3.jpg'
                    // 'span':刷刷地址
                }
            ],

		}
	},
    created(){
        this.arr(),
        this.tw()
    },
    methods:{
        arr(){
            this.$http.get('static/json/recom.json')
                .then(
                    function(res){
                        this.fn=res.body
                    },
                    function(ree){
                        console.log(404)
                    }
                )
        },
        tw(){
            this.$http.get('static/json/recomtwo.json')
                .then(
                    function(res){
                        this.two=res.body
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
	.desc{padding:0 .12rem; margin:.18rem 0;color:#6a6a6a;margin-top: -0.4rem;}
    .desc img{width:.3rem;height:.3rem;margin-right:.1rem; border-radius:50%; vertical-align: middle;}
    .desc span{display:inline-block; width:30%; font-size: .26rem;text-align: center;overflow:hidden;text-overflow: ellipsis;white-space:nowrap;}
    .desc span:nth-of-type(3){width:32%;}
    .west-life,.new-goods,.time,.doyen,.like{margin-top:.56rem;padding:0 .32rem;}
    .west-life:after,.price:after{display: block;content: "";clear: both;}
    h2{margin-bottom: .46rem; font-size: .3rem;text-align: center;}
    .left{float:left;}
    .right{float:right;}
    .west-life .west-box .left{width:3.36rem;height:3.36rem;}
    .left img{height:100%;width:100%;}
    .west-life .right{width:3.36rem;}
    .right img{height:1.6rem;width:100%;}
    .new-goods ul,.time ul{white-space: nowrap;overflow-x:auto;}
    .new-goods ul li{display: inline-block;width:2.8rem;height:2.6rem;font-size: .26rem;text-align: center;margin-right: .2rem;}
    .new-goods ul li img{width:100%;height:100%;margin-bottom:.28rem;}
    .new-goods ul li p{margin-bottom:.24rem;width:2.16rem;padding:0 .32rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
    .new-goods ul li span{color:#fd888b;}
    .new-goods .more{font-size: .26rem;color:#6a6a6a;text-align: center;}
    .time h2{margin-bottom:.32rem;}
    .time li{display: inline-block;}
    .time img{width:3.3rem;height:3.4rem;}
    .time .time1{margin-bottom:.32rem; font-size: .26rem;color:#6a6a6a;text-align: center;}
    .time .time1 img{width:.3rem;height:.3rem;vertical-align: middle;margin-right:.2rem;}
    .time .right{font-size: 0.26rem;text-align: center;float:left;margin:.86rem .32rem;}
    .time .right p:nth-of-type(1){margin-bottom:.38rem;width:2rem;padding:0 .15rem; overflow:hidden; text-overflow:ellipsis; }
    .time .right p:nth-of-type(2){margin-bottom:.2rem; }
    .time .right .btn{display: inline-block; width:2.3rem;height:.6rem;border:1px solid #000;line-height:.6rem;border-radius:.08rem; }
    .time .right .btn>img{width:.34rem;height:.3rem;margin-right:.16rem;vertical-align: middle;}
    .time .right .btn>em{vertical-align: middle;font-style: normal;}
    .unline{color:#fd888b;font-size: .3rem}
    .line{font-size: .16rem;text-decoration:line-through;color:#6a6a6a;}
    .cart{margin-right:.18rem;}
    .like{font-size: .26rem;}
    .like li{margin-bottom:.66rem;}
    .like li img{width:100%;}
    .like li h3{margin:.34rem 0;}
    .like-desc{color:#6e6e6e;overflow:hidden; text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
    .price{height:.82rem;position: relative;}
    .price span:nth-of-type(1){position:absolute;bottom:0;color:#fd888b;vertical-align:bottom;}
    .price span:nth-of-type(2){position:absolute;bottom:0; right:0;display:inline-block;height:.82rem;width:1.66rem;border:1px solid #000;border-radius:.08rem;line-height:.82rem;text-align: center;vertical-align: bottom;}
</style>