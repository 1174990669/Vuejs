<template>
	<div>
		<div class="title">
			<router-link to='/me/meatwo' tag="span"><</router-link>
			<span>设置</span>
		</div>
		<section>
			<div class="portrait">
				<span>头像</span>
				<img src="../../static/img/qq.jpg">
			</div>
			<div class="xbox">
				<span>更改用户名</span>
				<span>></span>
			</div>
			<router-link to='/fitphone' tag="div" class="xbox">
				<span>更改手机号</span>
				<span>></span>
			</router-link>
			<div class="xbox">
				<span>版本信息</span>
				<span>></span>
			</div>
			<div class="xbox">
				<span>意见反馈</span>
				<span>></span>
			</div>
			<div class="xbox">
				<span>关于我们</span>
				<span>></span>
			</div>
			<div class="xbox">
				<span>退货/售后</span>
				<span>></span>
			</div>
			<div class="xbox">
				<span>服务条款和隐私声明</span>
				<span>></span>
			</div>
		</section>
		<router-link to='/home' tag="div" class="button">退出登录</router-link>
	</div>
</template>
<style scoped>
	*{
		font-size: 0.36rem;
	}
	.title{
		background: #fff;
		position: fixed;
		top: 0;
		z-index: 1;
		width: 100%;
		height: 0.9rem;
		text-align: center;
		line-height: 0.9rem;
		border-bottom: 2px solid #f7f7f7;
	}
	.title span:nth-child(1){
		font-size: 0.4rem;
		padding-left: .3rem;
		float: left;
	}
	section{
		background: #fff;
		margin-top: 0.9rem;
	}
	.portrait{
		width: 100%;
		height: 1.5rem;
		border-bottom: 1px solid #eaeaea;
		line-height: 1.5rem;
	}
	.portrait span{
		padding: 0 0.3rem;
		font-size: 0.3rem;
		float: left;
	}
	.portrait img{
		width: 1.16rem;
		height: 1.16rem;
		margin-top: 0.2rem;
		margin-left: 0.3rem;
		border-radius: 50%;
	}
	.xbox{
		color: #404040;
		width: 100%;
		height: 0.8rem;
		border-bottom: 1px solid #eaeaea;
		background: #fff;
		line-height: 0.8rem;
	}
	.xbox span{
		padding: 0 0.3rem;
		font-size: 0.3rem;
		float: left;
	}
	.xbox span:nth-child(2){
		float: right;
	}
	.button{
		display: inline-block;
		width: 5.54rem;
		height: 0.84rem;
		background: #65c4aa;
		border-radius: 0.08rem;
		text-align: center;
		line-height: 0.84rem;
		color: #fff;
		position: relative;
		top: 0.26rem;
		left: 0.98rem;
	}
	 @media screen and (min-width: 769px){
        .title{
          width: 640px;
        }
        nav{
          width: 640px;
        }
        .count{
          width: 640px;
        }
    }
</style>
