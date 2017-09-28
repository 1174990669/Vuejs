<template> <!-- 我的订单已发货页面 -->
	<div>
		<hd></hd>
		<p class="home-p">商品信息:</p>
		<section class="section-two">
			<ul>
				<li>
					<img src="../../static/images/b2.jpg" alt="水杯">
					<p>Line高白玉骨瓷马克杯<br/>
						<mark>颜色分类:哑光绿</mark><br/>
						<strong>￥69</strong>
						<span>X1</span>
					</p>
				</li>
				<p class="ul-p">快递<span>￥0.00</span></p>
			</ul>
		</section>
		<section class="section-three">
			<div class="div-right">
				<p>共一件商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<strong>总计:&nbsp;&nbsp;
						<span>￥69</span>
					</strong>
				</p>
				<button class="but1">查看物流</button>
				<button class="but2">确认收货</button>
			</div>
		</section>
	</div>
</template>
<script>
import hd from '../components/order-head'
export default{
	components:{
		hd
	}
}
</script>
<style scoped>
	.section-one{width:100%;height:1.10rem;background: white;border-bottom: 1px solid #eaeaea}
	.section-one ul{height:1.10rem;border-bottom:1px solid #eaeaea;line-height:.60rem;position:relative;} 
	.section-one li{list-style:none;display:inline-block;font-size:0.3rem;margin-left: .34rem;}
	.section-one i{position:absolute;width:1.10rem;height:0.04rem;background:#65c4aa;top:1.06rem;left:4.5rem;}
	.home-p{height:0.64rem;font-size:0.3rem;border-bottom:1px solid #eaeaea;line-height: 0.64rem;padding-left:.34rem;background: white;}
	.section-two li{list-style:none;height:2.08rem;border-bottom:1px solid #eaeaea;font-size:.3rem;background:white;}
	.section-two li img{width:1.56rem;height:1.56rem;margin: .24rem 0 0 0.34rem;}
	.section-two li p{margin:-1.5rem 0 0 2.06rem;line-height:.5rem;font-size:.3rem;}
	.section-two li mark{background: transparent;color:#6a6a6a;}
	.section-two li strong{color:#fd888b;}
	.section-two li span{float:right;padding-right:0.34rem;}
	.section-two .ul-p{font-size:0.3rem;height:0.92rem;padding-left:.66rem;border-bottom:1px solid #eaeaea;line-height:0.86rem;background:white;}
	.section-two .ul-p span{float:right;padding-right:.34rem;color:#fea1a3;}
	
	.section-three{height:2.62rem;background:white;}
	.section-three .div-right{float:right;margin-top: .38rem;padding-right:.34rem}
	.section-three .div-right p{font-size:.3rem;}
	.section-three .div-right span{color:#fea1a3;}
	.section-three .div-right button{width:1.8rem;height:.82rem;background:transparent;font-size: .3rem;outline:none;border:1px solid #65c4aa;border-radius: 0.1rem;}
	.section-three .div-right .but2{background:#65c4aa;color:white;}
</style>