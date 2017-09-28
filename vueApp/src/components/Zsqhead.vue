<template>
	<nav>
		<div class="searchk">
			<div class="search">
			<img src="../../static/images/search.png" alt="" class="msg">
			<!-- <router-link to='/sea'> -->
				<input type="text" class="outline" placeholder="全球优质供应商直供">
			<!-- </router-link> -->
		</div>
		<img src="../../static/images/msg.png" alt="" class="msg">
			<ul>
				<router-link to='/sq/tj' tag='li'>推荐</router-link>
				<router-link to='/sq/zx' tag='li'>最新</router-link>
				<router-link to='/sq/shi/abcd' tag='li'>家饰</router-link>
				<router-link to='/sq/na' tag='li'>收纳</router-link>
				<router-link to='/sq/she' tag='li'>餐厨</router-link>
				<router-link to='/sq/jf' tag='li'>家纺</router-link>
			</ul>
		</div>
	</nav>
</template>
<style scoped>
	nav{width: 100%;height: 1.65rem;background: #fff;position: fixed;z-index: 1;top: 0;left:0;}
	.header{position: fixed;height:.88rem; width:100%;top:0;font-size:.24rem;background: #fff;z-index: 99;}
    .search{display: inline-block; height:.56rem;margin:.16rem .34rem;width:6.12rem;border-radius: .06rem;background: #ebebeb}
    .search img{height:.26rem;width:.26rem;margin:0 .22rem; line-height:.56rem;}
    .search .outline{outline: none;border:none;height:100%;font-size: .26rem;}
    .msg{width: .42rem;height:.34rem;vertical-align: middle;}
	.searchk ul{width: 96%;font-size: 0;color: #999999;margin:0 auto;}
	.searchk ul li{font-size: 0.28rem;display: inline-block;padding: 0.2rem 0 0.16rem;width: 16.6%;text-align: center;
	}
	.abc{color: #65c4aa;border-bottom: .08rem solid #65c4aa;}
</style>