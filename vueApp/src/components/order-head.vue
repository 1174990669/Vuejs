<template>
	<div>
		<header>
			<router-link to='/me/meatwo' tag='p'><span><</span>我的订单</router-link>
		</header>
		<section class="section-one">
			<ul>
				<li>
					<router-link to='/all' tag='span'>全部</router-link>
				</li>
				<li>
					<router-link to='/stay' tag='span'>待付款</router-link>
				</li>
				<li>
					<router-link to='/goods' tag='span'>待发货</router-link>
				</li>
				<li>
					<router-link to='/shippend' tag='span'>已发货</router-link>
				</li>
				<li>
					<router-link to='/end' tag='span'>已完成</router-link>
				</li>
				<!-- <i></i> -->
			</ul> 
		</section>
	</div>
</template>
<style scoped>
	header{width:100%;height:.86rem;border-bottom:.2rem solid #fafafa;background: white;}
	header p{font-size:.3rem;text-align:center;line-height:.86rem;padding-right:.54rem;}
	header span{float:left;padding-left:.34rem;}

	.section-one{width:100%;height:1.10rem;background: white;border-bottom: 1px solid #eaeaea}
	.section-one ul{height:1.10rem;border-bottom:1px solid #eaeaea;line-height:.60rem;position:relative;} 
	#li-one{color:#65c4aa;}
	.section-one li{list-style:none;float:left;font-size:0.3rem;width: 20%;text-align: center;line-height:1.1rem;}
	
	.abc{color:#65c4aa;padding:.12rem .1rem .34rem .1rem;border-bottom:.06rem solid #65c4aa;}
</style>

