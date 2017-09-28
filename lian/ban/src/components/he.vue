<template>
	<div class="te">
		<header class="heade">
            <h1>豆瓣</h1>
	        <ul>
	          <router-link to='/'><li>电影</li></router-link>
	          <li>图书</li>
	          <li>广播</li>
	          <li>小组</li>
	          <router-link to='/sou'><li>搜索</li></router-link>
	        </ul>
	    </header>
	</div>
</template>
<style>
header{border-bottom: 1px solid gray;height:86px}
  h1{float:left;color:#00b600;padding-left:20px;font-size:40px;margin-bottom: 0}
  .heade ul{float:right;padding-right: 30px;}
  .heade li{display:inline-block;line-height: 86px;font-size:24px;padding-left:20px}
  .heade li:nth-of-type(1){color:#2384E8;}
  .heade li:nth-of-type(2){color:#9F7860;}
  .heade li:nth-of-type(3){color:#E4A813;}
  .heade li:nth-of-type(4){color:#2AB8CC;}
  .heade li:nth-of-type(5){color:#42bd56;}
</style>