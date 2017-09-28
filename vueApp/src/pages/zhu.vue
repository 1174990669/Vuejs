<template>
	<div>
		<router-link to='/start' tag='div' class="top-back">
			<img src="../../static/img/goback.png">
		</router-link>
		<div class="photo">
			  	<img src='../../static/img/people.png'>
				<p>注册</p>
		</div>
		<div class="reg_content">
			<div class="regisrer">
				<img src="../../static/img/phone.png">
				<li>
					<span>+86</span>
					<img src="../../static/images/xj.jpg">
					<input class="input1" type="text" placeholder="输入手机号">
				</li>
			</div>
			<div class="scrod">
				<img src="../../static/img/yjm.png">
				<li>	
					<input class="input2" type="text" placeholder="输入验证码">
					<button>点击获取验证码</button>
				</li>
			</div>
			
			<div class="confirm">注册</div>
			<p>注册代表您同意用户协议</p>
		</div>
		
		<div class="reg_foot">	
			<div >
				<p>使用社交账号登录</p>
			</div>
			
		
			<ul class="share">
					<li><img src="../../static/img/weibo.png"><p>微博</p></li>
					<li><img src="../../static/img/weixin.png"><p>微信</p></li>
					<li><img src="../../static/img/qq.png"><p>QQ</p></li>
			</ul>
		</div>
	</div>
</template>
<script></script>
<style scoped>
	input{border:none;outline:none;}
	.top-back{width: 100%;height: .4rem;}
	.top-back img{
		margin-top:0.3rem;margin-left:0.33rem;width:0.2rem;height: 0.35rem;
	}
	.photo{
		width:100%;height: 2.2rem;text-align: center;margin-top: 0.4rem;
	}
	.photo img{
		margin:0 auto;width: 1.45rem;height: 1.45rem;
	}
	.photo p{
		font-size: 0.36rem;color: black;margin-top:0.35rem;
	}
	.regisrer{
		height:0.9rem;width:5.86rem;margin:0 auto;margin-top:0.74rem;position: relative;line-height:0.9rem;
	}

	.regisrer img{
		position:absolute;top:0.3rem;left:0.08rem;width:0.21rem;height:0.35rem
	}
	.regisrer li{
		width: 5.11rem;height: 0.9rem;border-bottom: 1px solid gray;
		position: absolute;left:0.67rem;
	}
	.regisrer>li>img{
		width:0.15rem;height: 0.1rem;position: absolute;left:0.6rem;top:0.4rem;
	}
	.regisrer>li>span{
		font-size: 0.30rem;color:black;position: absolute;
	}
	.regisrer .input1{position:absolute; top:0.3rem;font-size: 0.28rem;left:0.9rem;text-indent: 0.16rem}
	
	.scrod{
		width:5.86rem;margin:0 auto;position:relative;height: 0.9rem;
	}
	.scrod img{
		position:absolute;top:0.3rem;left:0.08rem;width: 0.34rem;height: 0.36rem;
	}
	.scrod li{
		position:absolute; font-size: 0.34rem;left:0.67rem;
		 height: 0.9rem;border-bottom: 1px solid gray;width:5.15rem;
		
	}
	
	.scrod span{
		position: absolute;top:0.25rem;left:0.55rem;border-left:2px solid gray;width: 0px;height: 0.46rem;

	}
	.scrod .input2{
		position: absolute;left:0.14rem ;font-size: 0.28rem;top:0.3rem;color: #d1d1d1;opacity: 0.3;
	}
	.scrod>li>button{
		border:1px solid #494949;width:2.1rem;height: 0.64rem;background:white;border-radius:0.1rem;position: absolute;right:0;top:0.18rem;font-size:0.22rem;outline:none;letter-spacing: 0.02rem;color:#555555;
	}
	 .confirm{
		width: 5.86rem;height:0.78rem;background: #b2e2d5;border-radius:0.08rem;margin:0 auto;margin-top:0.57rem;font-size: 0.32rem;text-align:center;line-height:0.8rem; color:white;
	}
	.reg_content>p{
		width: 5.86rem;margin:0 auto;font-size: 0.25rem;margin-top: 0.4rem;text-align:right;}
	.reg_content{
		width: 100%;
	}
	.reg_foot{
		width: 100%;margin-top: 1.11rem;
	}
	.reg_foot div{
		width: 5.86rem;border-top:0.02rem solid #ececec;margin:0 auto;text-align:center;
	}
	.reg_foot div p{
		width: 2.66rem;height:0.24rem;background:white;font-size: 0.26rem;text-align: center;margin:0 auto;
	margin-top:-0.15rem;}

	
	.share{
		margin:0 auto;
		margin-top:0.61rem;
		width: 5.4rem;
		height:0.94rem;
	

	}
	.share li{
		width:0.75rem;padding-left:0.5rem;padding-right:0.5rem;float: left;
		}
	.share li img{
		width: 0.75rem;height: 0.75rem;
	}
	
	.share p{
		text-align:
		center;font-size: 0.25rem;margin-top:0.18rem;
	}
</style>