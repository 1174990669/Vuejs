<template>
	<section>
		<!-- <Zsqhead></Zsqhead> -->
		<router-view></router-view>
		<div class="character">
			<div class="bg" v-for='item in fn'>
				<div class="name">
					<img :src="item.portrait">
					<span>{{item.tit}}</span>
				</div>
				<router-link :to="'/shione/'+item.id">
					<img  :src="item.img[0]" class="images">
				</router-link>
				<ul>
					<li>
						<img src="../../static/images/fabulous.png">
						<span>{{item.zan}}</span>
					</li>
					<li>
						<img src="../../static/images/collection.png">
						<span>{{item.like}}</span>
					</li>
					<li>
						<img src="../../static/images/comment.png">
						<span>{{item.comment}}</span>
					</li>
				</ul>
				<p>{{item.content}}</p>
			</div>
			
		</div>
	</section>
</template>
<script>

export default{
	data(){
		return{
			fn:'',

		}
	},
	created(){
		this.arr()
	},
	methods:{
		arr(){
			this.$http.get('static/json/shi.json')
				.then(
					function(res){
						this.fn=res.body
					},
					function(ree){
						console.log(404)
					}
				)
		}
	}
}
</script>
<style scoped>
	/*body{background: rgb(245,245,245);font-family: '微软雅黑';}*/
	span{color: #65c4aa;}
	p{margin: 0.2rem 0;}
	ul,ol{margin:0;padding:0;}
	/*li{display:inline-block;}*/
	section{background: #fff;padding: 1.65rem 0.3rem 1.4rem 0.3rem; font-size:.28rem;}
		.character .name{
			border-top: 0.08rem solid #f9f9f9;
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
			padding-top: 0.1rem
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
</style>