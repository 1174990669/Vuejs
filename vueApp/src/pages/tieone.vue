<template>
	<footer class="S-fixed">
		<div class="div-fixed">
			<span class="s-left">
				<img src="/static/images/x.jpg" alt="图片被台风吹走啦">
			</span>
			<p>选择要分享到的平台</p>
			<ul>
				<li>
					<img src="../../static/images/xlogo.jpg" alt="图片被台风吹走啦"><br/>
					<span>微博</span>
				</li>
				<li>
					<img src="../../static/images/plogo.jpg" alt="图片被台风吹走啦"><br/>
					<span>朋友圈</span>
				</li>
				<li>
					<img src="../../static/images/wlogo.jpg" alt="图片被台风吹走啦"><br/>
					<span>微信</span>
				</li>
				<li>
					<img src="../../static/images/dlogo.jpg" alt="图片被台风吹走啦"><br/>
					<span>更多</span>
				</li>
			</ul>
			<router-link to='/tie' tag='p'>取消分享</router-link>
		</div>
	</footer>
</template>
<style scoped>
	.S-fixed{position:fixed;bottom:0;width:7.5rem;z-index:99;}
	.div-fixed{height:5.6rem;background:#c8c8c7;font-size:.3rem;position:relative;}
	.div-fixed .s-left{float:right;margin:.34rem .3rem 0 0}
	.div-fixed .s-left img{width:.36rem;height:.36rem;}
	.div-fixed p{width:100%;text-align:center}
	.div-fixed p:nth-of-type(1){float:left;margin:.0rem 0 .56rem 0;}
	.div-fixed p:nth-of-type(2){background:white;height:1.1rem;position:absolute;bottom:0;line-height:1.1rem}
	.div-fixed ul{clear:both;margin:0 .2rem 0 .5rem;}
	.div-fixed li{display:inline-block;margin-right:.46rem;text-align:center;font-size:.22rem}
	.div-fixed li img{border-radius:.23rem;width:1.1rem;height:1.1rem;}
</style>