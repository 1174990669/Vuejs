<template>
<div>
	<div class="header">
		<div class="search">
			<img src="../../static/images/search.png" alt="" class="msg">
			<router-link to='/sea'>
				<input type="text" class="outline" placeholder="全球优质供应商直供">
			</router-link>
		</div>
		<img src="../../static/images/msg.png" alt="" class="msg">
	    <div class="nav">
	        <router-link to='/spin/recommend' tag='li'>推荐</router-link>
	        <router-link to='/spin/decoration' tag='li'>家饰</router-link>
	        <router-link to='/spin/box' tag='li'>收纳</router-link>
	        <router-link to='/spin/kitchen' tag='li'>餐厨</router-link>
	        <router-link to='/spin/spincen' tag='li' class="active">家纺</router-link>
	    </div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{
		}
	}
}
</script>
<style scoped>
	.header{position: fixed;height:.88rem; width:100%;top:0;font-size:.24rem;background: #fff;z-index: 99;}
    .search{display: inline-block; height:.56rem;margin:.16rem .34rem;width:6.12rem;border-radius: .06rem;background: #ebebeb}
    .search img{height:.26rem;width:.26rem;margin:0 .22rem; line-height:.56rem;}
    .search .outline{outline: none;border:none;height:100%;;font-size: .26rem;}
    .msg{width: .42rem;height:.34rem;vertical-align: middle;}
    .nav{height:1rem;margin-top:-1px; font-size:.26rem;color:#999999;background:#fff;width:7.5rem;}
    .nav li{height: .92rem;width:16%;line-height: .92rem;border-bottom:.08rem solid transparent;text-align: center;float:left;margin-left: .32rem;}
    .nav li:nth-last-of-type(1){margin:0}
    .abc{color:#65c4aa;border-bottom:.08rem solid #65c4aa !important;}
</style>