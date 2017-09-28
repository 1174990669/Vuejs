<template>
	<div class="fi">
		<hea></hea>
		<!-- <h1>{{this.$route.params.abcd}}</h1> -->
	   <div style="background:url(https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg);background-size:100% 100%;width:750px;height:160px">
			<p class="p1">
				<span>用 App 打开</span><br/>
				<span>查看主演的其它电影</span>
			</p>
			<a href="#"><button class="but2">打开</button></a>
			<a href="#"><button class="but1">极速下载</button></a>
		</div>
		<h1 class="h1">{{fix.title}}</h1>
		<div class="center">
			<div class="div-left">
				<p><span>7.5分&nbsp;&nbsp;</span><span style="color:#666">24182人评价</span></p>
				<p>101分钟 / 剧情 / 动作 / 叶伟信(导演) / 古天乐 / 吴樾 / 托尼·贾 / 林家栋 / 克里斯·柯林斯 / 郑雪儿 / 卢惠光 / 蔡洁 / 陈汉娜 / 2017-08-17(中国大陆) 上映
				</p>
				<p><a href="#">用App查看影人资料</a></p>
			</div>
			<div class="div-right">
				<img :src="fix.images.large" alt="">
			</div>
			<div class="div-a">
				<a href="#">想看</a>
				<a href="#">看过</a>
			</div>
			<div class="font">
				<h4>杀破狼·贪狼的剧情简介</h4>
				<p class="fon-p">
					{{fix.summary}}
				</p>
			</div>
			<div class="div-img">
				<h4>影人</h4>
				<ul>
					<li v-for="item in fix.directors" class="li">
						<img :src="item.avatars.small" alt=""><br/>
						<span>{{item.name}}</span><br/>
						<span>导演</span>
					</li>
					<li v-for="item in fix.casts" class="li">
						<img v-bind:src="item.avatars.small" alt=""><br/>
						<span>{{item.name}}</span><br/>
						<span>演员</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.p1{float:left;padding-left:30px;font-size:26px;line-height:50px;text-align:left;color:#2CA532;}
	button{float:right;font-size:26px;margin:60px 20px 0 0;border-radius:10px;}
	.but1{background:#42bd56;color:white;padding:10px 14px;border:1px solid #42bd56;}
	.but2{background:transparent;color:#42bd56;padding:10px 18px;border:1px solid #42bd56;}
	.h1{color:#666;width:100%;text-align:left}
	.div-left{width: 400px;float:left;}
	.div-left p{text-align:left;padding-left:30px;}
	.div-left p:nth-of-type(1){font-size:26px}
	.div-left p:nth-of-type(2){font-size:24px;line-height:40px}
	.div-left a{font-size:26px;color:#42bd56;}
	.div-right{width:310px;float:right;}
	.div-right img{width:250px;height:350px;}
	.div-a{clear:both;padding-top:30px}
	.div-a a{border:1px solid #ffb712;color:#ffb712;padding:16px 140px;margin:10px;font-size:26px;border-radius:10px;}
	.font{margin-top:60px;text-align:left;}
	h4{color:gray;margin-top:20px;text-align:left;padding-left: 30px}
	.font p{font-size:18px;color:#666;line-height:50px;padding-left:30px;}
	.div-img ul{width:100vw;height:400px;white-space:nowrap;overflow:auto;}
	.div-img li{display:inline-block;width:200px;height:200px}
	.li img{width:180px;height:200px}
	/*.fon-p{font-size:24px}*/
</style>
<script>
import hea from '../components/he'

export default{
	data(){
		return{
			fix:[],
		}
	},
	mounted:function(){
		this.fi()
		// this.$route.params.abcd
	},
	methods:{
		fi(){
			// var id=this.$router.params.id
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.abcd).then(
					function(res){
						this.fix=res.data;
					},function(err){
						console.log(404)
					}
				);
		}
	},
	components:{
		hea
	}
}
</script>