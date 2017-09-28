<template>
	<div class="clic">
		<div>
			<span v-on:click="fu"><</span>
			<button>商品</button>
			<button>详情</button>
			<button>评价</button>
		</div>
		<ul>
			<li>商品详情页面</li>
			<li>商品详情页面</li>
			<li>商品详情页面</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'clic',
	methods:{
		fu(){
			window.history.go(-1)
		}
	}
}
</script>
<style>
	.clic div{background: rgba(0,0,0,0.4);height: 80px}
	.clic span{font-size: 60px;color:rgba(255,0,0,0.6);float: left;margin-top: 10px}
	.clic button{font-size: 40px;margin-right: 110px;margin-top: 10px;}
</style>