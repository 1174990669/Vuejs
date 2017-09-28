<template>
	<div class="div-head">
		<router-link to='/start' tag='div' class="top-back">
			<img src="/static/img/goback.png">
		</router-link>
		<div class="photo">
		  <img src='/static//img/people.png'>
			<p>登录</p>
		</div>
		<div class="reg_content">
			<div class="regisrer">
					<img src="/static/img/phone.png">
					<li>
						<span>+86</span>
						<img src="/static/images/xj.jpg">
						<input class="inp" type="text" placeholder="输入手机号" 
						@blur="dian"
						>
						<em class="em" style="font-size: .26rem"></em>
					</li>
			</div>
			<div class="scrod">
					<img src="/static/img/lock.png">
					<li>	
						<input class='put' v-model='va' type="password" placeholder="输入密码">
					</li>
			</div>
			<div class="confirm" >确定</div>
			<div class="confi" v-on:click='tia' v-show='va.length'>确定</div>
			<!-- <router-link to='/spin/recommend' tag='div' class="confirm">确定</router-link> -->
			<p>使用验证码登录</p>
		</div>
		<div class="reg_foot">	
			<div >
				<p>使用社交账号登录</p>
			</div>
			<ul class="share">
				<li><img src="/static/img/weibo.png"><p>微博</p></li>
				<li><img src="/static/img/weixin.png"><p>微信</p></li>
				<li><img src="/static/img/qq.png"><p>QQ</p></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			va:'',
			fo:true
		}
	},
	methods:{
		dian(){
			var tel = /^[1][358]\d{9}$/; 
			var on = document.getElementsByClassName('inp')[0]; 
			var oe = document.getElementsByClassName('em')[0]; 
			if (tel.test(on.value)) {
				oe.innerHTML='请输入密码'
				console.log(0)
			}else if(on.value==''){
				 	oe.innerHTML='不能为空';
				 	console.log(404)
			}else if(!tel.test(on.value)){
				console.log(4)
				oe.innerHTML='手机号输入不正确';
				}

		},
		tia(){
			if (this.va==this.va) {
				this.$router.push({path:'/spin/recommend'})
			}else if(this.va==''){
				console.log(404)
				alert("请输入密码")
			}
			
		}
	}
}
</script>
<style scoped>
	input{outline: none;border:none;}
	.em{color:red;position:absolute;top:.9rem;left:.9rem;}
	.div-head{width:100%;height: 100vh;}
	.top-back{width: 100%;height: .4rem}
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
		height:0.9rem;width:5.86rem;margin:0 auto;margin-top:0.74rem;position: relative;
	}

	.regisrer img{
		position:absolute;top:0.3rem;left:0.08rem;width:0.3rem;height:0.38rem
	}
	.regisrer li{
		width: 5.11rem;height: 0.9rem;border-bottom: 1px solid gray;
		position: absolute;left:0.67rem;
	}
	.regisrer li>img{
		width:0.15rem;height: 0.1rem;position: absolute;left:0.6rem;top:0.4rem;
	}
	.regisrer span:nth-of-type(1){position:absolute;left:-0.1rem;top:0.3rem;font-size: 0.3rem;line-height: 0.34rem;color:black;}
	.regisrer span:nth-of-type(2){font-size: .3rem;position: absolute;top:.3rem;left:.85rem;}
	.regisrer input{position:absolute;top:0.3rem;font-size:0.3rem;left:0.9rem;text-indent: 0.16rem;}
	
	.scrod{
		width:5.86rem;margin:0 auto;position:relative;height: 0.9rem;margin-top:.2rem;}
	.scrod img{
		position:absolute;top:0.3rem;left:0.08rem;width: 0.30rem;height: 0.38rem;
	}
	.scrod li{
		position:absolute; font-size: 0.34rem;left:0.67rem;
		 height: 0.9rem;border-bottom: 1px solid gray;width:5.15rem;
		
	}
	.scrod span{
		position: absolute;top:0.25rem;left:0.55rem;border-left:2px solid gray;width: 0px;height: 0.46rem;

	}
	.scrod input{position: absolute;left:0.14rem ;font-size: 0.3rem;top:0.3rem;}
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
		width: 2.66rem;height:0.24rem;background:white;font-size: 0.26rem;text-align: center;margin:0 auto;letter-spacing: 0.06rem;
	margin-top:-0.15rem;}

	 .confirm{width: 5.86rem;height:0.78rem;background: #b2e2d5;border-radius:0.08rem;margin:0 auto;margin-top:0.57rem;font-size: 0.34rem;text-align:center;line-height:0.8rem;color:white;
	}
	.confi{width: 5.86rem;height:0.78rem;background:#65c4aa;border-radius:0.08rem;margin:0 auto;margin-top:-0.75rem;font-size:0.34rem;text-align:center;line-height:0.8rem;color:white;}
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
