<template>
<div>
	<section>
		<Zsqhead></Zsqhead>
		<ul class="left">
			<router-link :to="'/zxone/'+item.id" tag='li' v-for='item in fn'>
			<!-- <router-link :to="'/naone/'+item.id"> -->
				<img :src="item.img[0]" class="cc">
				<p>{{item.content[0]}}</p>
				<span class="p-span">￥{{item.price[0]}}</span>
				<div class="xb">
					<router-link to='/ren/renone' tag='div' class="tb-left">
						<img src="../../static/images/character2.png">
						<span>{{item.tit[0]}}</span>
					</router-link>
					<div class="tb-right">
						<img src="../../static/images/fabulous.png">
						<span>{{item.like}}</span>
					</div>
				</div>
			</router-link>
		</ul>
		<ul class="right">
			<router-link :to="'/zxone/'+item.id" tag='li' v-for='item in fn'>
				<img :src="item.img[1]" width="173" height="196" class="cc">
				<p>{{item.content[1]}}</p>
				<span class="p-span">￥{{item.price[1]}}</span>
				<div class="xb">
					<div class="tb-left">
						<img :src="item.portrait" width="31">
						<span>{{item.tit[1]}}</span>
					</div>
					<div class="tb-right">
						<img src="../../static/images/fabulous.png" height="20">
						<span>{{item.zan}}</span>
					</div>
				</div>
			</router-link>
		</ul> 
		<router-view></router-view>
		<spinFixed></spinFixed>
	</section>
</div>
</template>
<script>
import Zsqhead from '../components/Zsqhead'
import spinFixed from '../components/spinFixed'
export default{
	data(){
		return{
			fn:''
			
		}
	},
	created(){
		this.arr(),
		this.menu()
	},
	methods:{
		arr(){
			this.$http.get('static/json/zx.json')
				.then(
					function(res){
						this.fn = res.body
					},
					function(ree){
						console.log(404)
					}
				)
		},
		menu(){
	      window.scrollTo(0,0);
	    }
	},
	components:{
		Zsqhead,spinFixed
	}
}
</script>
<style scoped>
	section{background: #f7f7f7;height: 18rem;position: relative;padding: 1.73rem 0.2rem 1.4rem 0.2rem; font-size: 0.28rem;}
	section ul{width: 49%;}
	section .left{position: absolute;top: 1.75rem;left: 0.2rem;}
	section .right{position: absolute;top: 1.75rem;right: 0;padding-bottom: 1.4rem;}
	section .left li{height: 5.4rem;}
	section .right li{height: 5.8rem;}
	section ul li{background: #fff;box-shadow: 0 0 0.05rem #ececec;width: 3.48rem;margin: 0.15rem 0 0 0;display: inline-block;border-radius: 0.08rem;}
	section ul li .cc{width: 3.46rem;height: 3.40rem;}
	section ul li p{margin: 0.35rem 0.1rem;width:2.5rem;height:.4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;float:left;}
	section ul li .p-span{font-size:0.2rem;float:right;color:#fd888b;margin:-.7rem 0 0 0;width: .8rem;}
	section ul li .xb{margin: 0 0.1rem;}
	section ul li .xb .tb-left{width: 2.45rem;position: relative;float: left;}
	section ul li .xb .tb-left img{height: 0.6rem;width: 0.6rem}
	section ul li .xb .tb-left span{position:absolute;top:0.1rem;padding-left: 0.1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1.8rem;}
	section ul li .xb .tb-right{float: right;}
	section ul li .xb .tb-right img{height: 0.4rem;}
	section ul li .xb .tb-right span{color: #404040;}
</style>