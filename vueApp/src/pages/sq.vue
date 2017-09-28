<template>
	<section>
		<Zsqhead></Zsqhead>
		<router-view></router-view>
		<spinFixed></spinFixed>
	</section>
</template>
<script>
import Zsqhead from '../components/Zsqhead'
import spinFixed from '../components/spinFixed'
export default{
	data(){
		return{

		}
	},
	components:{
		Zsqhead,spinFixed
	}
}
</script>
<style scoped>
	/*body{background: rgb(245,245,245);font-family: '微软雅黑';}*/
	span{color: #65c4aa;}
	p{margin: 0.2rem 0;}
	ul,ol{margin:0;padding:0;}
	/*li{display:inline-block;}*/
	section{background: #fff;font-size: 0.28rem;}

	.photo{
		width: 100%;
		height: 2.55rem;
	}
	.photo .title{
		position: relative;
	}
	.photo .title img{
		height: 0.6rem;
		width: 0.6rem;
	}
	.photo .title span{
		position: absolute;
		top: .1rem;
	}
	.photo ul{
		width: 100%;
		height: 1.76rem;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.photo ul li{
		display: inline-block;
	}
	.photo ul li img{
		width: 3.32rem;
		height: 100%;
	}
	::-webkit-scrollbar{  /*不支持火狐*/
		display: none;
	}
	.character .name{
		margin: 0.3rem 0;
		position: relative;
	}
	.character .name img{
		height: 0.6rem;
	}
	.character .name span{
		padding-left: 0.25rem;
		position: absolute;
		top: .1rem;
	}
	.character .bg .images{
		width: 6.84rem;
		height: 6rem;
	}
	.character .bg ul{
		position: relative;
		padding-top: 0.1rem;
	}
	.character .bg ul li{
		display: inline-block;
		width: 1.28rem;
	}
	.character .bg ul li img{
		width: 0.36rem;
	}
	.character .bg ul li span{
		color: #404040;
		padding-left: 0.2rem;
		position: absolute;
		top: 0.08rem;
	}
	.character ol{
		width: 100%;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.character ol li{
		display: inline-block;
	}
	.abc{color:#65c4aa;border-bottom:.08rem solid #65c4aa !important;}
</style>