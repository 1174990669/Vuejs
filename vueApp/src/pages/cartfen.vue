<template>
<section>
	<Zfen></Zfen>
	<router-view></router-view>
</section>
</template>
<script>
import Zfen from '../components/Zfen'
export default{
	data(){
		return{}
	},
	components:{
		Zfen
	}
}
</script>
<style scoped>
	/* section .nr{width: 100%;height: 7.34rem;background: #f7f7f7;text-align: center;line-height: 7.34rem;margin-top: 6rem}
	section .nr p{font-size: 0.32rem;color: #65c4aa;
	} */
</style>