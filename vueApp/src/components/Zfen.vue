<template>
	<nav>
		<router-link to='/me/meatwo' tag='span'><</router-link>
		<span>我的积分</span>
		<div class="tit">
			<img src="../../static/images/tg8.png">
			<div class="integral">
				<p>6</p>
				<p>我的积分</p>
			</div>
		</div>
		<ul>
			<router-link to='/cartfen/cartfenone' tag='li'>兑换优惠券</router-link>
			<router-link to='/cartfen/cartfentwo' tag='li'>我的兑换记录</router-link>
			<router-link to='/cartfen/cartthree' tag='li'>获取最高积分</router-link>
		</ul>
	</nav>
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
	*{padding: 0;margin: 0;font-family: '微软雅黑';font-size: 0.36rem;}
	nav{position: fixed;top: 0;z-index: 1;width: 100%;height: 0.9rem;text-align: center;line-height: 0.90rem;box-shadow: 0 0 0.05rem #a09e9e;background: #fff;}
	nav span:nth-child(1){float: left;padding-left: 0.3rem;}
	nav span:nth-child(2){padding-right: 0.5rem;}
	.tit{position: relative;width: 100%;height: 4.2rem;}
	.tit img{position: absolute;left: 0;width: 100%;height: 100%;}
	.tit .integral{position: absolute;width: 100%;height: 100%;text-align: center;background: rgba(0,0,0,.5);}
	.tit .integral p{font-size: 0.5rem;color: #fff;margin: 1.7rem 0 -0.2rem;}
	.tit .integral p:nth-child(2){margin: 0;font-size: 0.35rem;}
	ul{width: 6.88rem;height: 0.88rem;background: #fff;font-size: 0;padding: 0 0.32rem;}
	ul li{height: 0.84rem;width: 2.29rem;text-align: center;line-height: 0.88rem;font-size: 0.28rem;display: inline-block;}
	.abc{color: #65c4aa;border-bottom: 0.04rem solid #65c4aa;}
	section{margin: 5.98rem 0 0;}
	section .nr{width: 100%;height: 7.34rem;background: #f7f7f7;text-align: center;line-height: 7.34rem;}
	/*.abc{}*/
</style>