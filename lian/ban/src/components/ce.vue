<template>
	<div class="ce"> 
		<div>
		  <router-link to="/tab1" tag="h2">切换1</router-link>
	      <router-link to="/tab1" tag="h2">切换2</router-link>
	      <input type="text" v-model="a">
	       
	       <router-view></router-view>
		</div>
	</div>
</template>
<script>
export default{
	name:'ce',
	data(){
		return{
			a: '这个是a变量'
		}
	}
}
</script>