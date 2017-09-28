<template>
	<div class="sea">
		<header></header>
		<section>
			<div class="div-head">
				<i class="iconfont" style="background:url(../../static/images/so.jpg)no-repeat;background-size:100% 100%"></i>
				<input class="inpu" type="text" placeholder="全球优质供应商直供">
				<router-link to='/spin/recommend'>
					<span>&nbsp;取消</span>
				</router-link>
			</div> 
			<div class="top">
				<h3>热门标签</h3>
				<ul>
					<li>隔板</li>
					<router-link to='/Hello' tag='li'>马克杯</router-link>
					<li>餐具</li>
					<li>四件套</li>
					<li>枕头</li>
					<li>被子</li>
					<li>毛巾/浴巾</li>
					<li>围巾</li>
					<li>抱枕</li>
					<li>地毯</li>
				</ul>
			</div>
			<div class="bottom">
				<h3>正在进行</h3>
				<ul>
					<li>京东秒杀</li>
					<li>邀请好友拿精品大奖</li>
					<li>领取20元无门槛新人首单劵</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<style scoped>
	
	header{width:100%;height:.4rem;}
	.div-head{width:7.5rem;height:1.08rem;position:relative;}
	.iconfont{position:absolute;width:.36rem;height:.36rem;top:.3rem;left:.4rem;}
	.div-head .inpu{width:5.7rem;height: .56rem;border-radius:.06rem;font-size:.3rem;color:#404040;outline:none;border:1px solid #ebebeb;float:left;margin:0.16rem 0 0 0.36rem;padding-left:0.4rem;background: #ebebeb} 
	span{font-size:0.34rem;color:#65C4AA;margin:-.56rem 0.25rem 0 0;float:right}
	h3{font-size:.4rem;color: #65C4AA;font-weight: 400;margin-bottom: 0}
	.top{margin:.13rem 0 0 .36rem;} 
	.bottom{margin-left:.36rem}
	li{list-style:none;display:inline-block;border:1px solid #8B8B8B;border-radius:.2rem;font-size:.3rem;padding:.14rem .2rem;margin: 0 .35rem .17rem 0}
</style>