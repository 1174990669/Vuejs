<template>
	<div>
		<hea></hea>
		<div class="Post" style="margin-top:.7rem">
			<ul>
				<li>
					<p>去哪里找到好看又实用的杯子？有朋友经常晒马克杯的照片...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>学霸的眼神</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><span>5</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m.jpg" alt="" class="img-one">
					<p>【马克杯】&nbsp;&nbsp;好想知道这些马克杯哪里有的买,好想买个有观赏度的...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>柠檬</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><span>6</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m1.jpg" alt="" class="img-two">
					<p>【马克杯】&nbsp;&nbsp;分享一组新买的马克杯...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>冰淇淋</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><span>7</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m2.jpg" alt="" class="img-three">
					<p>【马克杯】&nbsp;&nbsp;绿色圆生菜系列马克杯来自设计师TORYBURCH...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>西柚</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><span>6</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m3.jpg" alt="" class="img-four">
					<p>【马克杯】&nbsp;&nbsp;书桌上也要萌萌哒，今天说一下那些可爱的马克杯...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>香蕉</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><span>10</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m4.jpg" alt="" class="img-five">
					<p>【马克杯】&nbsp;&nbsp;分享一组骨瓷杯子，质感强...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>泡芙</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><br/><span>5</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m4.jpg" alt="" class="img-five">
					<p>【马克杯】&nbsp;&nbsp;分享一组骨瓷杯子，质感强...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>泡芙</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><br/><span>5</span></i>
					</div>
				</li>
				<li>
					<img src="../../static/images/m4.jpg" alt="" class="img-five">
					<p>【马克杯】&nbsp;&nbsp;分享一组骨瓷杯子，质感强...</p>
					<div>
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<strong>泡芙</strong>
						<i class="iconfont" style="background:url(../../static/images/s.jpg)no-repeat;background-size: 100% 100%"><br/><span>5</span></i>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import hea from '../components/search-head'
export default{
	components:{
		hea
	}
}
</script>
<style scoped>
	.Post{width: 7.5rem;}
		.Post ul{background: #e6e6e6;}
		.Post li{width: 3.44rem;position: relative;background: white;margin-top: .2rem;border:1px solid #e1e1e1;border-radius: .2rem;}
		.Post li:nth-of-type(odd){float: left;margin-left: .2rem;}
		.Post li:nth-of-type(even){float: right;margin-right:.2rem;}
		.Post p{width:3rem;}
		.Post div img{width:.62rem;height:.64rem;margin-left: .2rem;}
		.Post li .img-one{width:3.44rem;border-radius: .2rem}
		.Post li .img-two{width:3.44rem;border-radius: .2rem}
		.Post li .img-three{width:3.44rem;border-radius: .2rem}
		.Post li .img-four{width:3.44rem;border-radius: .2rem}
		.Post li .img-five{width:3.44rem;border-radius: .2rem}
		.Post li p{margin:.2rem;font-size:.3rem;line-height:.5rem;}
		.Post li div{position: relative;}
		.Post strong{position:absolute;top:0.34rem;font-size:.3rem;color:#65C4AA;left:.9rem;font-weight:400;}
		.Post .iconfont{position:absolute;width:.38rem;height:.4rem;right:.5rem;top:.3rem;}
		.Post .iconfont span{color: #404040;font-size:.3rem;position:absolute;right:-.34rem;bottom:0rem;width:.34rem;}
</style>