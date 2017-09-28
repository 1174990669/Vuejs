 
<template>
	 <div>
	 	<h2>新歌页面</h2>
		<div class="content">新歌内容</div>
	 </div>
</template>

<style  >
.content{
	font-size: 30px;
	color: red;
}
</style>

<script>
	export default {
		props: ['price', 'title']
	}
</script>