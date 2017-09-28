<template><!-- 详情页面 -->
<div>
	<detaSwipe :data="data[id].img"></detaSwipe>
		<div class="goods">
	        <h2>{{data[id].content[1]}}</h2>
	        <p class="msg"><span>￥ {{data[id].price[0]}}</span><span>{{data[id].lei}}</span></p>
	        <div class="desc" >
	            <span><img src="../../static/images/sure.png" alt="">欧美质量标准</span><span><img src="../../static/images/sure.png" alt="">30天无忧退货</span><span><img src="../../static/images/sure.png" alt="">24小时快速发货</span>
	        </div>
	    </div>
	    <div class="sum">
	        <span>规格数量</span>
	        <span>+</span>
	    </div>
	    <div class="cmd">
	        <h3>推荐理由</h3>
	        <p>出口挪威、瑞典，经1380℃高温烧制的高白玉骨瓷，优质窑厂匠人手工打造。北欧经典蓝条纹设计马克杯，波浪形杯边简洁、俏皮。外壁高级磨砂质感，内壁细腻光洁。</p>
	    </div>
	    <div class="assess">
	        <div class="sum">
	            <span>晒单评价 4</span>
	            <span>></span>
	        </div>
	        <ul>
	            <li v-for='item in data[id].img'>
	                <div class="img">
	                	<img :src="item" alt="">
	                </div>
	                <p><span>{{data[id].describe[1]}}</span><i></i></p>
	                <p>
		                <img :src="data[id].portrait" alt="">
		                <span>{{data[id].name}}</span>
	                </p>
	            </li>
	        </ul>
	    </div>
	    <div class="goods-details">
	        <h3>商品详情</h3>
	        <div class="style">
	            <p><b>分类</b><span>毛毯</span></p>
	            <p><b>尺寸</b><span>200cmX230cm</span></p>
	            <p><b>颜色</b><span>条纹/格子</span></p>
	            <p><b>材质</b><span>法兰绒</span></p>
	            <p><b>容量</b><span>375ml</span></p>
	            <p><b>重量</b><span>1.35kg</span></p>
	        </div>
	        <div class="goods-desc">
	            <h2>WAVY MUG</h2>
	            <img :src="data[id].img[0]" alt="" class="goods-descimg">
	            <h2>MAIN MESSAGES</h2>
	            <img src="../../static/images/bo.png" alt="" class="bo">
	            <p class="font">出口挪威、瑞典，经1380℃高温烧制的高白玉骨瓷，优质窑厂匠人手工打造。北欧经典蓝条纹设计马克杯，波浪形杯边简洁、俏皮。外壁高级磨砂质感，内壁细腻光洁。</p>
	            <img :src="data[id].img[1]" alt="" class="goods-descimg">
	            <div class="goods-descbox">
	                <b>装饰/</b><span>蓝白相间的简洁设计，纯正的高级磨砂质感瓷质细腻，增添空间的安静优雅感。</span>
	            </div>
	            <img :src="data[id].img[2]" alt="" class="goods-descimg">
	            <div class="goods-descbox">
	                <b>简致/</b><span>蓝白相间的简洁设计，纯正的高级磨砂质感瓷质细腻，增添空间的安静优雅感。</span>
	            </div>
	            <img :src="data[id].img[3]" alt="" class="goods-descimg">
	            <ul>
	                <li>
	                    <h4>材质</h4>
	                    <p>选用优质高岭土烧制而成，瓶内采用白瓷面。</p>
	                </li>
	                 <li>
	                    <h4>工艺</h4>
	                    <p>选用优质高岭土烧制而成，瓶内采用白瓷面。</p>
	                </li>
	                 <li>
	                    <h4>标准</h4>
	                    <p>选用优质高岭土烧制而成，瓶内采用白瓷面。</p>
	                </li>
	            </ul>
	        </div>   
	    </div>
	    <div class="know">
	        <div class="img"><img src="../../static/images/about.png" alt=""></div>
	        <h2>SHOPPING INFORMATION</h2>
	        <h3> 购 | 物 | 须 | 知</h3>
	        <dl>
	            <dt>关于运费</dt>
	            <dd>单笔订单金额（不含运费）满88包邮；不满88每单收取10元运费。</dd>
	        </dl>
	        <dl>
	            <dt>帮助</dt>
	            <dd>1.可在购买商品30天内（以支付时间计算）联系客服，为该商品索取发票。</dd>
	            <dd>2.爱购目前可开家居日用品发票。</dd>
	        </dl>
	        <dl>
	            <dt>联系我们</dt>
	            <dd>1.单笔订单金额（不含运费）满88包邮；不满88每单收取10元运费。</dd>
	            <dd>2.客服电话：40-1236545-991。</dd>
	        </dl>
	    </div>
	<div class="footer">
	    <ul>
	        <li><img src="../../static/images/title.png" alt=""></li>
	        <li><img src="../../static/images/cart.png" alt=""></li>
	        <router-link to='/cart' tag='li'>加入购物车</router-link>
	        <router-view></router-view>
	        <router-link to='/page/Zdet' tag='li'>立即购买</router-link>
	    </ul>
	</div>
</div>

</template>
<script>
import detaSwipe from '../components/detaSwipe'
export default{
	data(){
		return{
			data:[],
			id:null,
		}
	},
	mounted(){
		 
		this.id=this.$route.params.abcd-1
		this.$http.get('static/json/zx.json?'+this.$route.params.abcd)
			.then(
				function(res){
					this.data = res.body
					// console.log(this.data[this.id].img)
				},
				function(ree){
					console.log(404)
				}
			)
	},
	components:{
		detaSwipe
	}
}
</script>
<style scoped>
	.goods{margin-top:.1rem;background:#fff;font-size: .26rem;}
    .goods h2{padding:0 .32rem; height:.68rem;line-height: .68rem; font-weight:400;font-size: .32rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
    .goods .msg{padding:0 .32rem; height:.68rem;line-height: .68rem;}
    .goods .msg span:nth-of-type(1){margin-right:.22rem;color:#fd888b;}
    .goods .msg span:nth-of-type(2){padding:.1rem .12rem;border:1px solid #979797;border-radius:.08rem;color:#979797;}
    .desc{padding:0 .12rem; margin:.18rem 0;color:#6a6a6a;}
    .desc img{width:.3rem;height:.3rem;margin-right:.1rem; border-radius:50%; vertical-align: middle;}
    .desc span{display: inline-block; width:32.5%; font-size: .26rem;text-align: center;}
    .desc span:nth-of-type(3){width:35%;}
    .sum{height:.68rem; margin:.03rem;padding:0 .32rem;line-height:.68rem;font-size: .26rem;background: #fff;}
    .sum span:nth-of-type(1){color:#6a6a6a;}
    .sum span:nth-of-type(2){float:right;font-size: .46rem;font-weight:900;color:#6a6a6a;}
    .cmd{padding:0 .32rem; margin-bottom:.1rem; font-size: .26rem;background: #fff;overflow: hidden;}
    .cmd h3.goods-details h3{margin:.18rem 0;font-weight:400;font-size:.26rem;}
    .cmd p{padding:.2rem 0;color:#6a6a6a;}
    .assess ul{padding:0 .32rem;white-space:nowrap;overflow-x: auto;background: #fff;font-size: .26rem;}
    .assess ul li{display: inline-block;margin-right:.24rem;}
    .assess ul li .img{width:2.6rem;height:2.45rem;padding: .26rem .1rem;box-shadow:0 .05rem .05rem #eee;}
    .assess ul li .img>img{width:100%;height:100%;}
    .assess ul li p:nth-of-type(1){margin-top:.26rem;}
    .assess ul li p:nth-of-type(2){margin:.18rem 0;color:#65c4aa;}
    .assess ul li p:nth-of-type(2)>img{height:.5rem;width:.5rem;margin-right:.1rem; border-radius: 50%;vertical-align: middle;}
    .goods-details{margin:.1rem 0; background:#fff;font-size: .22rem;font-weight:40;}
    .goods-details h3{text-indent:.32rem; padding:.18rem;box-shadow:0 .1rem .1rem #ececec;}
    .goods-details .style{padding:0 .32rem;margin:.1rem 0;line-height: .56rem;border-bottom:.1rem solid #ececec;}
    .goods-details .style b{margin-right:.8rem;font-weight:400;}
    .goods-details .style p{border-bottom:.02rem solid #ececec;}
    .goods-details .style p:nth-last-of-type(1){border-bottom:none;}
    .goods-details .style span{color:#959595;}
    .goods-desc{text-align: center;font-size: .26rem;}
    .goods-desc h2{margin-top:1.7rem;margin-bottom:.4rem;}
    .goods-desc .goods-descimg{width:3.4rem;height:3.4rem;margin-top:.5rem;}
    .goods-desc .bo{width:1rem;height:.2rem;}
    .font{padding:.4rem .64rem;font-size: .24rem;color:#8f8f8f;}
    .goods-descbox{padding:.2rem .53rem .3rem .32rem;margin-top:.8rem; background: #f9f9f9;}
    .goods-descbox b{font-size: .46rem;}
    .goods-descbox span{font-size: .24rem;position: relative;top:.1rem;}
    .goods-desc ul{text-align: left;padding:0 .8rem;margin-top:.8rem;}
    .goods-desc ul li{border-bottom:.02rem solid #ececec;}
    .goods-desc ul li>h4{display:inline-block;padding:0 .2rem;margin:.2rem 0; line-height:.44rem;background: #65c4aa;color:#fff;}
    .goods-desc ul li>p{margin-bottom: .4rem;}
    .know{font-size: .26rem;padding-bottom: 1.2rem;}
    .know>h2,.know>h3,.know>.img{text-align: center;}
    .know>.img{margin:.24rem 0;}
    .know>h2{margin:.1rem 0;font-size: .32rem}
    .know>h3{font-size: .32rem}
    .know>dl{padding:0 .3rem;margin-bottom:.4rem;}
    .know>dl>dt{list-style-type:disc;margin-bottom: .2rem;}
    .know>dl>dd{color:#a2a2a2;}


    /*底部加入购物车*/
    .footer{width:100%; background: #fff;position: fixed;bottom:0;}
    .footer ul{padding:0 .32rem;}
    .footer ul li{height:1rem; float:left;font-size: .26rem;}
    .footer ul li:nth-of-type(1){height:.6rem;width:.6rem;padding:.2rem; border-right:.02rem solid #ececec;}
    .footer ul li:nth-of-type(1) img{height:.5rem;width:.5rem;}
    .footer ul li:nth-of-type(2){height:.8rem;width:.8rem;padding:.1rem;}
    .footer ul li:nth-of-type(2) img{height:.5rem;width:.5rem;margin-top: .14rem;}
    .footer ul li:nth-of-type(3){height:.68rem;width:2rem;margin-top: .16rem;text-align: center;float:right;line-height: .64rem;background: #65c4aa;color:#fff;}
    .footer ul li:nth-of-type(4){height:.64rem;width:1.96rem;margin-right:.22rem;margin-top: .16rem; border:.02rem solid #000;text-align: center;float:right;line-height: .64rem;border-radius:.08rem;}
    /*.footer ul li img{height: .5rem;height: .5rem;}*/
</style>
