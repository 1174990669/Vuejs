<!-- 搜索页面头部组件 -->
<template>
	<header>
		<div class="head">
			<i class="iconfont" style="background:url(../../static/images/so.jpg)no-repeat;background-size:100% 100%"></i>
			<router-link to='/sea'>
				<input type="text" placeholder="马克杯" class="inpu">
			</router-link>
			<!-- <router-link to=''> -->
				<router-link to='/spin/recommend' tag='span' class="span">&nbsp;取消</router-link>
			<!-- </router-link> -->
		</div>
		<div class="Catalog">
			<ul>
				<li><router-link to='/Hello' tag='span'>单品</router-link></li>
				<li><router-link to='/post' tag='span'>帖子</router-link></li>
				<li><router-link to='/user/useron' tag='span'>用户</router-link></li>
			</ul>
		</div>
	</header>
</template>
<style scoped>
	header{width:100%;height:1.14rem;position:relative;}
	.head{height: .84rem;position: relative;}
	.head .iconfont{position:absolute;width:.36rem;height:.36rem;top:.3rem;left:.4rem;}
	.head .inpu{width:5.7rem;height:.56rem;border-radius:.1rem;font-size:.3rem;color:black;outline:none;border:1px solid #ebebeb;padding-left:0.4rem;background: #ebebeb;float:left;margin:0.16rem 0 0 0.36rem;}

	.head .span{font-size:0.32rem;color:#65C4AA;border:none;position:absolute;padding:0;top:.28rem; }
	.Catalog{height:0.6rem;}
	.Catalog ul{border-bottom:1px solid #efefef;height:1rem;position:relative;}
	.Catalog li{float:left;font-size:.3rem;margin-top: .3rem;width:33%;text-align:center;}
	.abc{color:#65c4aa;padding:.24rem;border-bottom: .08rem solid #65c4aa;}
</style>