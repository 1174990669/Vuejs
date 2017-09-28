<template>
	<div class="so">
		<header>
			<router-link to='/'><span>关闭</span></router-link>	
			<input type="text" placeholder="搜索">
		</header>
		<div>
			<ul>
				<li>
					<strong>电影</strong><br/>
					<span>影院热映</span>
				</li>
				<li>
					<strong>电视</strong><br/>
					<span>正在热播</span>
				</li>
				<li>
					<strong>图书</strong><br/>
					<span>畅销排行</span>
				</li><br/>
				<li>
					<strong>同城</strong><br/>
					<span>周末活动</span>
				</li>
				<li>
					<strong>小组</strong><br/>
					<span>志趣相投</span>
				</li>
				<li>
					<strong>音乐</strong><br/>
					<span>新碟榜</span>
				</li><br/>
				<li>
					<strong>阅读&nbsp;</strong><br/>
					<span>电子书</span>
				</li>
				<li>
					<strong>游戏</strong><br/>
					<span>虚拟世界</span>
				</li>
				<li>
					<strong>应用</strong><br/>
					<span>玩手机</span>
				</li><br/>
				<li>
					<strong>东西</strong><br/>
					<span>心爱之物</span>
				</li>
				<li>
					<strong>F&nbsp;M</strong><br/>
					<span>红心歌单</span>
				</li>
				<li>
					<strong>市集</strong><br/>
					<span>购买原创</span>
				</li>
			</ul>
			<div style="clear:both" class="div-fixed">
				<em>注册账号</em><span>|</span>
				<em>登录豆瓣</em>
			</div>
			<div class="div-fixed" style="border-top:none">
				<em>使用桌面版</em><span>|</span>
				<em>使用豆瓣App</em>
			</div>
		</div>
	</div>
</template>
<script>
export default{

}
</script>
<style scoped>
	header{border-bottom:1px solid gray;margin-top:30px;padding-bottom: 30px}
	header span {font-size:30px;color:#42bd56;text-align:left;padding-left: 30px}
	input{width:600px;height:50px;border:1px solid gray;margin-left:20px;font-size:28px;color:#666;background:rgba(0,0,0,0.2);}
	ul{float:left;margin-bottom:50px}
	li{display:inline-block;margin-left:120px;width: 96px;height: 83px;padding-top:30px}
	ul strong{font-size:40px;font-weight:400;color:rgb(230, 70, 126)}
	li span{font-size:24px;color:gray}
	.div-fixed{height:80px;border-bottom:1px solid gray;border-top:1px solid gray;}
	.div-fixed em{font-size:26px;color:#42bd56;width:40%;display:inline-block;line-height: 85px}
	.div-fixed span{font-size:30px;color:gray;}
</style>