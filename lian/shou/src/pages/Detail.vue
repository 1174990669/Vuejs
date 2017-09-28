<!-- Detail.vue -->
<template>
	<div class="detail">
		<detail-header></detail-header>
		<img src="../assets/img/lp_01.jpg" alt="">
		<div>{{ $route.params.abcd }}</div> 
		<h1>{{items[$route.params.abcd-1].title}}</h1>
		<div>{{items[$route.params.abcd-1].price}}</div>
		<div>{{items[$route.params.abcd-1].id}}</div>
		<!-- <router-link :to="{ name: 'smzq' }">跳到生命周期</router-link> -->
		<!-- <div @click="gosmzq">跳到生命周期</div> -->
	</div>
</template>
<style scoped>
	.detail {
		padding: 0.24rem;
		font-size: 12px;
	}
	img {
		display: block;
		width: 80%;
		margin: 0 auto 0.2rem;
	}
	p {
		font-size: 14px;
		line-height: 0.5rem;
		text-align: justify;
		padding-bottom: 0.24rem;
	}
</style>
<script>
	import DetailHeader from '../components/DetailHeader'

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
		components: {
			DetailHeader
		},
		methods:{
			gosmzq(){
				// alert()
				// window.location.href='http://localhost:8081/#/smzq';
				this.$router.push('/smzq');
			}
		}
	}
</script>