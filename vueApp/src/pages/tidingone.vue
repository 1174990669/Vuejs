<template>  <!-- 我的消息页面 -->
	<div class="body">
		<nav>
			<router-link to='/me/meatwo' tag='span'><</router-link>
			<span>我的消息</span>
		</nav>
		<section>
			<router-link to='/kf' tag='div' class="box">
				<img src="../../static/images/kf.jpg">
				<div class="xb">
					<span>在线客服</span><br>
					<span>查看与客服的沟通记录</span>
					<span><img src="../../static/images/jtt.png"></span>
				</div>
			</router-link>
			<div class="box lise">
				<img src="../../static/images/jx.jpg">
				<div class="xb">
					<span>活动精选</span><br>
					<span>领取20元无门槛新人首单劵</span>
					<span><img src="../../static/images/jtt.png"></span>
				</div>
			</div>
			<div class="box">
				<img src="../../static/images/dz.jpg">
				<div class="xb">
					<span>点赞</span><br>
					<span>最近人气不太行，都没人点赞</span>
					<span><img src="../../static/images/jtt.png"></span>
				</div>
			</div>
			<div class="box">
				<img src="../../static/images/pl.jpg">
				<div class="xb">
					<span>评论</span><br>
					<span>天啊，我是过气了么！都没人给我点赞... ...</span>
					<span><img src="../../static/images/jtt.png"></span>
				</div>
			</div>
			<div class="box">
				<img src="../../static/images/xt.jpg">
				<div class="xb">
					<span>系统消息</span><br>
					<span>店小二什么时候翻我的牌子</span>
					<span><img src="../../static/images/jtt.png"></span>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default{
	data () {
    return {
      
    }
  },
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
			// window.scrollTo(0,0)
		}
	},
	
  
}
</script>
<style scoped>
	.body,ul,p{
			margin: 0;
			padding: 0;
			font-size: 0.32rem;
		}
		body{
			background: #f9f9f9;
		}
		nav{
			background: #fff;
			position: fixed;
			top: 0;
			z-index: 1;
			width: 100%;
			height: 0.9rem;
			text-align: center;
			line-height: 0.9rem;
			border-bottom: 1px solid #f7f7f7;
		}
		nav span:nth-child(1){
			font-size: 0.4rem;
			padding-left: .3rem;
			float: left;
		}
		nav span:nth-child(2){
			padding-right: 0.3rem;
		}
		section{
			margin: 1.1rem 0 0;
		}
		section .box{
			position: relative;
			margin-top: 0.2rem;
			width: 100%;
			height: 1.34rem;
			background: #fff;
		}
		section .box img{
			width: 0.89rem;
			height: 0.89rem;
			margin-top: 0.2rem;
			margin-left: 0.26rem;
		}
		section .box .xb{
			position: absolute;
			top: 0.25rem;
			width: 6rem;
			display: inline-block;
		}
		section .box .xb span{
			float: left;
			font-size: 0.29rem;
			padding-left: 0.3rem;
		}
		section .box .xb span:nth-child(3){
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
			width: 4.44rem;
			padding-top: 0.12rem;
			font-size: 0.2rem;
			color: #8c8c8c;
			clear:both;
		}
		section .box .xb span:nth-child(4){
			float: right;
			margin-top: -0.3rem;
		}
		section .box .xb span:nth-child(4) img{
			width: 0.2rem;
			height: 0.34rem;
		}
		.lise:before{
			position: absolute;
		    width: 0.35rem;
		    height: 0.35rem;
		    border-radius: 50%;
		    background: #e16064;
		    color: #fff;
		    right: 0.65rem;
		    top: 0.55rem;
		    text-align: center;
		    line-height: 0.35rem;
		    font-size: 0.2rem;
		    content: '2';
		    z-index: 1;
		}
</style>