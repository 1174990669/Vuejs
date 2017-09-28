<template>
	<section>
		<div class="obtain">
			<span>获取更高积分</span>
			<span>一分耕耘，一分收获</span>
		</div>
		<div class="fl">
			<img src="../../static/images/tb.png">
			<div class="sm">
				<span>连续登陆</span>
				<span>+3</span><br>
				<span>每天打开爱购app，奖励3积分。</span>
			</div>
		</div>
		<div class="fl">
			<img src="../../static/images/tb1.png">
			<div class="sm">
				<span>社区发帖</span>
				<span>+10</span><br>
				<span>在社区发布一条帖子，奖励10积分;<br>发布帖子被社区推荐，额外奖励20积分;<br>限每天发布的前两条帖子。</span>
			</div>
		</div>
		<div class="fl">
			<img src="../../static/images/tb2.png">
			<div class="sm">
				<span>分享</span>
				<span>+5</span><br>
				<span>将社区帖子分享一次微博，微信好友或朋友圈，奖励5积分；限每天的前三次分享。</span>
			</div>
		</div>
		<div class="fl">
			<img src="../../static/images/tb3.png">
			<div class="sm">
				<span>收藏</span>
				<span>+1</span><br>
				<span>收藏一次社区帖子，话题文章，或爱购单品，奖励1积分；限每天的前三次收藏。</span>
			</div>
		</div>
		<div class="fl">
			<img src="../../static/images/tb4.png">
			<div class="sm">
				<span>评论</span>
				<span>+2</span><br>
				<span>参与一次话题文章的评论或回复社区帖子，奖励2积分；限每天的前三次评论。</span>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{

		}
	},
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
	section{margin: 5.98rem 0 0;font-size: .36rem;}
	section .nr{width: 100%;height: 7.34rem;background: #f7f7f7;text-align: center;line-height: 7.34rem;}
	section .nr p{font-size: 0.32rem;color: #65c4aa;}
	section .obtain{width: 100%;height: 0.78rem;border-bottom: 0.04rem solid #e3e3e3;line-height: 0.78rem;}
	section .obtain span{font-size: 0.28rem;padding-left: 0.66rem;}
section .obtain span:nth-child(2){color: #8b8b8b;font-size: 0.23rem;}
section .fl{position: relative;width: 100%;height: 1.8rem;border-bottom: 0.04rem solid #e3e3e3;}
section .fl:nth-child(3){height: 2.4rem;}
section .fl:nth-child(4),section .fl:nth-child(5){height: 2.2rem;}
section .fl:nth-child(6){height: 3rem;}

section .fl img{position: absolute;margin: 0.3rem 0.36rem 0 0.62rem;width: 0.48rem;height: 0.48rem;}
section .fl .sm{position: absolute;top:0.3rem;left:1.4rem;width:4.8rem;display: inline-block;}
section .fl .sm span{line-height: 0;font-size: 0.3rem;}
section .fl .sm span:nth-child(2){padding-left: .3rem;color: #65c4aa;}
section .fl .sm span:nth-child(4){color: #7e7e7e;font-size: 0.24rem;}
section .fl:nth-child(4) .sm span:nth-child(2),section .fl:nth-child(5) .sm span:nth-child(2),section .fl:nth-child(6) .sm span:nth-child(2){padding-left: .9rem;
} /**/
</style>
