<template>
	<section>
		<div class="photo">
			<div class="title">
				<img src="../../static/images/soliciting.png">
				<span>正在征集</span>
			</div>
			<ul>
				<li><img src="../../static/images/tg1.png"></li>
				<li><img src="../../static/images/tg1.png"></li>
				<li><img src="../../static/images/tg1.png"></li>
				<li><img src="../../static/images/tg1.png"></li>
			</ul>
		</div>
		<div class="character">
			<div class="bg" v-for='item in fn'>
				<div class="name">
					<img :src="item.portrait">
					<span>{{item.tit}}</span>
				</div>
				<router-link :to="'/tjone/'+item.id">
					<img :src="item.img[1]" class="images">
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
		<!-- <router-view></router-view> -->
	</section>
</template>
<script>

export default{
	data(){
		return{
			fn:''

		}
	},
	created(){
		this.arr()
	},
	methods:{
		arr(){
			this.$http.get('static/json/tj.json')
				.then(
					function(res){
						this.fn = res.body
						// console.log(this.fn)
					},
					function(ree){
						console.log(404)
					}
				)
		}
	},
}
</script>
<style scoped>
	/*body{background: rgb(245,245,245);font-family: '微软雅黑';}*/
	span{color: #65c4aa;}
	p{margin: 0.2rem 0;}
	ul,ol{margin:0;padding:0;}
	/*li{display:inline-block;}*/
	section{background: #fff;padding: 1.73rem 0.3rem 1.4rem 0.3rem;font-size: 0.28rem;}

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
		width: 3.32rem;height: 100%;
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

</style>