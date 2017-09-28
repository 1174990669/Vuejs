<template>
	<div class="to">
		<hea></hea>
		<div class="center">
	    	<h1>{{fof.title}}</h1>
	    <div v-show='!fof'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503395569156&di=a9d750e8b37308736af6b733fcfe5774&imgtype=0&src=http%3A%2F%2Fm.gogaonet.com.cn%2Fbook_cover%2Fbd14306798.jpg" alt=""></div>
			<ul class="float">
				<li v-for="item in fof.subjects">
					<router-link v-bind:to="'/fix/'+item.id">
						<img v-bind:src="item.images.large" alt="#"><br/>
					</router-link>
	            	<strong>{{item.title}}<br/></strong>
	            	<p>评分：<!-- {{item.rating.average}} --></p>
            	</li>
			</ul>
	    </div>
	</div>
</template>

<script>
import hea from '../components/he'

export default{
	name:'to',
	// prots:['id'],
	data(){
		return{
			fof:[]
		}
	},
	created(){
		this.fi()
	},
	methods:{
		fi(){
			this.$http.jsonp(
				'https://api.douban.com/v2/movie/coming_soon').then(
					function(res){
						if (res.data.subjects.length>=11) {
							res.data.subjects.length=10
							// console.log(1)
						}
						console.log(2)

						
						 this.fof=res.data
						// alert()
						// console.log(res.data.subjects.length)
					},function(ree){
						console.log(404)
					}
				)
		}
		
	},
	components:{
		hea
	}
}
</script>

<style>
	.center h1{float:left;font-size: 30px;font-weight:400;padding-left: 20px;color:black}
	.float{clear:both;text-align: left}
    .float li{display:inline-block;padding-left:8%;padding-right:4%;width: 132px;height: 189px}
    .float img{width: 180px;height:250px;margin-top: 20px}
    .float strong{overflow:hidden;display:inline-block;width:180px;height:38px;font-size:26px;}
    .float p{font-size:20px;margin:0;}
</style>