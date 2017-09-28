<template> <!-- 我的订单待付款页面 -->
	<div>
		<hd></hd>
		
		<section class="section-two">
			<p>您暂时还没有相关订单哦</p>
			<button>快去商城剁手吧</button>
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
	.section-one{height:1.10rem;}
	.section-one ul{height:1.10rem;border-bottom:2px solid #eaeaea;line-height:.60rem;position:relative;background:white;} 
	.section-one li{list-style:none;display:inline-block;font-size:0.3rem;margin-left: .34rem}
	.section-one i{position:absolute;width:1.10rem;height:0.04rem;background:#65c4aa;top:1.06rem;left:1.47rem}
	
	.section-two{text-align: center;margin-top:6.22rem;padding-bottom:3rem;}
	.section-two p{font-size:0.34rem;margin:0;}
	.section-two button{font-size:0.34rem;width:3.58rem;height:1.10rem;border:1px solid #71c8b0;color: #71c8b0;background: transparent;border-radius: 0.1rem;}
</style>