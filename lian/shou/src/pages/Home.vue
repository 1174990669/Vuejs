<!-- Home.vue -->
<template>
	<div class="container">
		<!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
		<!-- <home-header></home-header> -->
		<homeNav></homeNav>
		<div class="content"> 
			<ul class="cont_ul">
				<list v-for="item in items" 
				:price="item.price" 
				:id="item.id"></list>
			</ul>
		</div>
	</div>
</template>
<style>
	.container {
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
	}
	.cont_ul {
		padding-top: 0.05rem;
		margin: 0 -0.12rem;
	}
	.cont_ul:after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		clear: both;
	}
</style>
<script>
	// 导入要用到的子组件
	import HomeHeader from '../components/HomeHeader'
	import homeNav from '../components/homeNav'
	import List from '../components/List'

	export default {
		data () {
			return {
				items: [
					{ price: "6999.00", title: "iPhone 7 128G", id:'1'},
					{ price: "2556.00", title: "小米 6 6+64G" , id:'2'},
					{ price: "3959.00", title: "华为 p10" , id:'3'},
					{ price: "9989.00", title: "华为 mate 9 保时捷版" , id:'4'},
					{ price: "999.00", title: "红米米 4" , id:'5'},
					{ price: "1119.00", title: "华为荣耀8 青春版 3+32G" , id:'6'},
					{ price: "2188.00", title: "小米 5s" , id:'7'},
					{ price: "4500.00", title: "iPhone 6s 64G" , id:'8'},
				]
			}
		},
		// 在components字段中，包含导入的子组件
		components: {
			HomeHeader,
			List,
			homeNav
		}
	}
</script>