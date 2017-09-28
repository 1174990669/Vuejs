<template>
	<div class="head-div">
		<header>
			<div class="C-div">
				<img src="../../static/images/z.jpg" v-on:click='fh' alt="图片开小差啦">
				<span>爱购店小二</span>
			</div>
		</header>
		<section id="se">
			<div class="div-right">
					<p class="tim">{{this.getData}}</p>
					<img class="img" src="../../static/images/k.jpg" alt="图片开小差啦">
					<p class="home">您好~ 欢迎光临本小店，请问您观看中哪些宝贝？</p>
				</div>
			<nav v-for='item in deta' id="nav" >
				<div class="div-left">
					<p class="tim">{{item.newdate==''? getData :item.newdate}}</p>
					<img class="img" :src="item.img" alt="">
					<p class="home">
						{{item.cont}}
					</p>
				</div>
			 	<div class="div-right">
					<p class="tim">{{item.newdate==''? getData : item.newdate}}</p>
					<img class="img" :src="item.img2" alt="">
					<p class="home" >
						{{item.kf}}
					</p>
				</div> 
			</nav>
		</section>
		<footer>
			<div class="C-fixed">
				<img id="img-left" src="../../static/images/re.jpg" alt="图片被台风吹走啦">
				<span>人工服务</span>
				<input type="text" id="inp" v-model='val' @keyup.enter="fa">
				<img id="img" src="../../static/images/y.jpg" alt="图片被台风吹走啦" >
				<img id="img-right" src="../../static/images/j.jpg" alt="图片被台风吹走啦" >
			</div>
			<span class="fix-spa" v-on:click='fa' v-show='val.length'>发送</span>
		</footer>
	</div>
</template>
<script>
import $ from 'jquery'
export default{
	data () {
		return{
			time:'',
			getData:'',
			val:'',
			list:[
				'Hello，周末愉快！很高兴为你效劳！',
				'亲~ 舒心购物，满180元或以上就可以免去邮费，非常划算哦',
				'新店开张，为赚信用，利润已降到最低，不再议价了。',
				'为了自己想要的生活,勇于放弃一些东西。',
			    '老李带婴儿去喝酒，居然还让婴儿喝了三大杯啤酒，旁边的人为什么都不劝阻或责骂？',
				'一男子独自在家，，，闻到有煤气的气味，竟然慌了手脚，最忙了半天也没止住煤气泄漏，最后决定座沙发上抽根烟冷静冷静在想办法。',
				'主人，兔兔句句都是真言，若有半句假话罚我跪CPU',
				'开学了，离别时刻，我拍着小表弟的肩说：“别想姐姐，姐清明回来看你，表弟。。。',
				'小红帽从大野狼面前走过，大野狼为何没有发现她？',
				'猪八戒是笨死的，那么他的儿子是怎么死的？',
				'为什么老虎打架，非要拼个你死我活绝不罢休？',
				'猪八戒是笨死的，那么他的儿子是怎么死的？',
				'为什么老虎打架，非要拼个你死我活绝不罢休？',
				'一个人被老虎穷追不舍，突然前面有一条大河, 他不会游泳,但他却过去了，为什么？',
				'猪八戒是笨死的，那么他的儿子是怎么死的？'
			],
			deta:[
				{	
					img:"",
					img2:"",
					cont:"",
					ren:'arry',
					newdate:'',
					kf:''
				},
			]
		}
	},
	updated(){
		document.getElementById('se').scrollTop = 1000000*100000001000;
		// console.log(document.getElementById('se').scrollTopv)
	},
	
	mounted(){
		this.getData=this.maydate()
	},
	methods:{
		fh(){
			window.history.go(-1)
		},
		fa(){
			var num= Math.floor(Math.random()*10+1);
			var time1 =this.maydate()
			this.deta.push(
				{
					img2:"./static/images/k.jpg",
					img:"./static/img/qq.jpg",
					cont:this.val,
					ren:'me',
					newdate:time1,
					kf:this.list[num]
				},
			)
			this.val='';
		},
		maydate(){
			var time =null;
			var myYear=new Date().getFullYear();
			var myMonth=new Date().getMonth()+1;
			var getDate=new Date().getDate();
			var myHours=new Date().getHours();
			var getMinutes=new Date().getMinutes();
			var getSeconds=new Date().getSeconds();
			 time=myYear+'-'+this.faa(myMonth)+'-'+this.faa(getDate)+'/ '+this.faa(myHours)+':'+this.faa(getMinutes)+':'+this.faa(getSeconds);
			return  time
		},
		faa(arr){
			if (arr<10) {
				return arr = "0" +arr;
			}else{
				return arr
			}
		}
	
	},


}
</script>
<style scoped>
	
	#nav:nth-of-type(1){display:none;}
	.fix-spa{position:absolute;width:.6rem;height: .5rem;background:#65c4aa;padding:.06rem;right:.36rem;top:.44rem;border-radius:.1rem;color:white;}
	.head-div{min-height: 100vh;background:#f9f9f9;}

	header .C-div{height:.88rem;border-bottom:1px solid #e6e6e6;font-size:.4rem;text-align:center;}
	header .C-div span{line-height:.88rem;padding-right:.32rem}
	header .C-div img{width:.4rem;height:.4rem;float:left;margin:.28rem 0 0 .32rem;} 

	section{background:#f9f9f9;font-size: .3rem;overflow-y:auto;height:10rem;}
	/*#nav{height:50%;}*/
	section img{position: absolute;border-radius:50%;width:1rem;height:1rem;}
	section p{position:absolute;text-align:center;font-size:.28rem;padding:.2rem .2rem;border-radius: .2rem;}
	section div{position:relative;width:100%;height:2.4rem;}
	/*section div:nth-last-of-type(1){padding-bottom:2rem;}*/
	section .div-right{float:left;background:#f9f9f9;}
	section .div-right .img{left:.3rem;top:1rem;}
	section .div-right .tim{width:90%;}
	section .div-right .home{left:1.5rem;top:.8rem;background:white;text-align: left;margin-right: .4rem;max-width:4.5rem;}
	
	section .div-left{float:right;background:#f9f9f9;}
	section .div-left .img{right:.3rem;top:1rem;}
	section .div-left .tim{width:90%;}
	section .div-left .home{right:1.5rem;top:.8rem;background:white;text-align: left;margin-left:.4rem;max-width:4.5rem;}

	footer{position:fixed;bottom:0;height:1.38rem;background:#ebebeb;width:100%;font-size:.3rem;max-width:760px;}
	footer .C-fixed span{position:absolute;bottom:.1rem;left:.24rem;color:#8b8b8b;font-size:.14rem;}
	.C-fixed #inp{width:3.7rem;height:.8rem;outline:none;border:1px solid gray;border-radius:.1rem;font-size:.4rem;position:absolute;left:1.6rem;top:.35rem;}
	.C-fixed img{position:absolute;}
	.C-fixed img:nth-of-type(1){width:.62rem;height:.62rem;top:.3rem;left:.38rem;}
	.C-fixed img:nth-of-type(2){width:.62rem;height:.62rem;top:.45rem;right:1.2rem;}
	.C-fixed img:nth-of-type(3){width:.62rem;height:.62rem;top:.45rem;right:.36rem;}
</style>