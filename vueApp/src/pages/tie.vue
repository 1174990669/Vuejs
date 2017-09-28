<template>
	<div>
		<tieswiper></tieswiper>
		<section>
			<div class="sec-div">
				<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
				<p>简单的小生活<br/><strong>开心每一天<span>···</span></strong></p>
			</div>	
		</section>
		<section>
			<div class="div-dl">
				<dl>
					<dt>就是想晒晒</dt>
					<dd>阳光正好, 适合出去走走, 晒晒我刚买的小餐具, 在家窝久了, 出去放放风, 开心。</dd>
					<br/>
					<span>2017/05/17</span><br/>
					<i class="iconfont" style="background:url(./static/images/ss.jpg)no-repeat;background-size:100% 100%;"></i>
					<i class="iconfont" style="background:url(./static/images/xin.jpg)no-repeat;background-size:100% 100%;"></i>
				</dl>
			</div>
			<div class="div-ce">
				<ul class="ul-img">
					<li>
						<img src="../../static/images/tx.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx2.jpg" alt="图片开小差啦">
						<img src="../../static/images/tx.jpg" alt="图片开小差啦">
					</li>
					<p><span>20 </span>次赞&nbsp;&nbsp;<i class="iconfont" style="background:url(./static/images/xj.jpg)no-repeat;background-size:100% 100%;"></i></p>
				</ul>
			</div>
		</section>
		<footer>
			<div class="fixed">
				<strong>回帖&nbsp;1</strong>
				<p><span>热门</span><span>最新</span></p>
			</div>
			<ul>
				<li>
					<div class="div-top">
						<img src="../../static/images/tx2.jpg" alt="">
						<h3>小安静</h3><br/>
						<p>漂亮的小餐具。我也喜欢。</p>
					</div>
					<div class="div-bottom">
						<strong>2017/5/19</strong>
						<div class="bot-right">
							<img src="../../static/images/s.jpg" alt="">
							<span>赞&nbsp;<a>0</a></span>
							<img src="../../static/images/q.jpg" alt="">
							<span>评论&nbsp;<a>0</a></span>
						</div>
					</div>
				</li>
			</ul>
		</footer>
		<router-link to='/bian' tag='p' id="fix-p">
			<i class="iconfont" style="background:url(./static/images/tb4.png)no-repeat;background-size:100% 100%;"></i>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<span >添 加 我 的 回 帖</span>
		</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
import tieswiper from '../components/tieswiper'
export default{
	data(){
		return{}
	},
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	},
	components:{
		tieswiper
	}
}
</script>
<style scoped>
	.sec-div{height:1.24rem;border-bottom:1px solid #b3b3b3;background:white}
	.sec-div img{width:.7rem;height:.7rem;margin-left:.35rem}
	.sec-div p{font-size:.26rem;color:#6ac6ad;margin:-.93rem 0 0 1.16rem;}
	.sec-div strong{color:#d6d6d6;font-weight: 400}
	.sec-div span{float:right;color: #8b8b8b;font-weight: 800;padding-right:.32rem;margin-top:-.16rem}

	.div-dl{height:3.34rem;background:white}
	.div-dl dl{font-size:.28rem;padding-left:.36rem;position:relative;}
	.div-dl dd{margin:0;padding-right:.34rem}
	.div-dl span{float:right;padding-right: .34rem;font-size:.26rem;color:#b1b1b1;}
	.div-dl .iconfont{position:absolute;font-size:.6rem;width:1.02rem;height:1.02rem;border-radius:.4rem;text-align:center;line-height:1rem;top:2.28rem;}
	.div-dl .iconfont:nth-of-type(1){left:1.72rem;}
	.div-dl .iconfont:nth-of-type(2){right:1.72rem;}

	.div-ce{height:2.5rem;margin-top: .14rem;background:white}
	.div-ce p{height:.98rem;background:#65c4aa;font-size:.3rem;text-align:center;line-height:.98rem;color:white;}
	/*.dic-ce .ul-img{overflow:hidden;}*/
	.div-ce li{list-style:none;height:1.7rem;padding:.1rem .3rem;display:inline-block;}
	.div-ce li img{float:left;width:.6rem;height:.6rem;padding-right:.1rem}
	.div-ce .ul-img{border-top: 1px solid #b3b3b3;}
	.div-ce .ul-img p{font-size:.3rem;background:transparent;color:#6a6a6a;margin-top:-1.5rem;line-height:1rem;}
	.fixed{font-size:.3rem;height:.86rem;border-bottom:1px solid #ececec;margin-top:.1rem;background:white;line-height:.86rem}
	.fixed strong{float:left;padding-left:.42rem;font-weight:400;}
	.fixed p{float:right;margin-right:.4rem;width:2.40rem;height:.6rem;position:relative;border:1px solid #65c4aa;border-radius:.1rem;overflow:hidden;margin-top:.15rem}
	.fixed span{position:absolute;height:.6rem;text-align:center;line-height:.6rem}
	.fixed span:nth-of-type(1){width:50%;background:#65c4aa;color:white;right:1.2rem; }
	.fixed span:nth-of-type(2){width:50%;color:#65c4aa;right:0;}
	.div-top{height:1.82rem;font-size:.3rem;padding-left: .34rem;margin-top:.38rem}
	.div-top img{width:.74rem;height:.74rem;}
	.div-top h3{color:#67c5ab;margin:-0.7rem 0 0 .9rem;font-size:.32rem;font-weight: 400;}
	.div-top p{font-size:.3rem;}
	.div-bottom{height:1.06rem;font-size:.3rem;margin-top:0.4rem;padding-bottom:0.4rem;color:#9d9d9d;}
	.div-bottom strong{float:left;padding-left:.34rem;}
	.div-bottom .bot-right{float:right;padding-right:.34rem;position:relative;margin-top:-.15rem}
	.bot-right img{width:0.6rem;height:.6rem}
	.bot-right img:nth-of-type(1){margin-right: 1rem}
	.bot-right img:nth-of-type(2){margin-right: .92rem}
	.bot-right span{position:absolute;top:.15rem;font-weight:400;}
	.bot-right span:nth-of-type(1){right:2.2rem;}
	.bot-right span:nth-of-type(2){right:.34rem;}

	#fix-p{font-size:.28rem;text-align: center;background:#65c4aa;position: fixed;bottom:0;width: 100%;height:.8rem;line-height:.8rem;}
	#fix-p .iconfont{font-size:.4rem;display:inline-block;width:.56rem;height: .56rem;position: absolute;top:.12rem;left:2.2rem;}
	#fix-p span{color: white;}
</style>