<template>
	<section>
		<div class="nr">
			<p>正在绞尽脑汁,给您想福利呢！</p>
		</div>
	</section>
</template>
<script>
export default{
	data(){
		return{}
	},
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
	section .nr{width: 100%;height: 7.34rem;background: #f7f7f7;text-align: center;line-height: 7.34rem;margin-top:6rem;}
	section .nr p{font-size: 0.32rem;color: #65c4aa;
	}
</style>