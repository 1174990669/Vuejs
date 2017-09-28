<template>
	<header>
		<div class="head-div">
			<router-link to='/tie' tag='span'>取消</router-link>
			<strong>添加回帖</strong>
			<span>发布</span>
		</div>
		<section class="sect">
			<input class="in" type="text" placeholder="喜欢,喜欢">
			<p>说 说 你 的 想 法</p>
			<div class="fixed-div">
				<img src="../../static/images/pa.jpg" alt="">
			</div>
		</section>
	</header>
</template>
<style scoped>
	.head-div{height:.9rem;width:7.5rem;text-align:center;font-size:.3rem;border-bottom:2px solid #fafafa}
	.head-div span{line-height:.9rem;}
	.head-div span:nth-of-type(1){float:left;padding-left: .34rem;}
	.head-div strong{line-height:.9rem;font-size: .34rem}
	.head-div span:nth-of-type(2){float:right;color:#65c4aa;padding-right: .34rem;}
	.sect{text-align: center;}
	.sect .in{width:6.4rem;height: 1.4rem;background:#ebebeb;border:none;border-radius: .1rem;color:black;outline: none;font-size:.3rem;padding-left: .4rem}
	.sect p{font-size:.3rem;float: left;padding-left: .34rem;color:#bababa;margin-top: .2rem;}
	.sect .fixed-div{width:2.14rem;height: 2.1rem;background:#e8e8e8;border-radius: .2rem;margin:2.9rem 0 .2rem .34rem;border:.04rem solid #9f9f9f; }
	.sect .fixed-div img{width: .7rem;height: .7rem;margin-top: .7rem;}
</style>