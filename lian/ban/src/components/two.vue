<template>
	<div class="two">
		<hea></hea>
	    <div class="center">
	    	<h1>{{fn.title}}</h1>
	    	<div v-show='!fn'>
	    		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503395569156&di=a9d750e8b37308736af6b733fcfe5774&imgtype=0&src=http%3A%2F%2Fm.gogaonet.com.cn%2Fbook_cover%2Fbd14306798.jpg" alt="">
	    	</div>
			<ul class="float">
				<li v-for="item in fn.subjects">
					<router-link v-bind:to="'/fix/'+item.id">
						<img v-bind:src="item.images.large" alt="#"><br/>
					</router-link>
	            	<strong>{{item.title}}<br/></strong>
	            	<p>评分：{{item.rating.average}}</p>
            	</li>
			</ul>
	    </div>
	</div>
</template>
<script>
import hea from '../components/he'

export default{
	name:'two',
	data(){
		return{
		   fn:''
		}
	},
	created(){
		this.te()
	},
	methods:{
		te(){
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
			.then(
				function(res){
					this.fn=res.data
				},
				function(ree){
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

<style scoped>
	header{border-bottom: 1px solid gray;height:86px}
    .heade h1{float:left;color:#00b600;padding-left:20px;}
    .heade ul{float:right;padding-right: 30px;}
    .heade li{display:inline-block;line-height: 86px;font-size:24px;padding-left:20px}
    .heade li:nth-of-type(1){color:#2384E8;}
    .heade li:nth-of-type(2){color:#9F7860;}
    .heade li:nth-of-type(3){color:#E4A813;}
    .heade li:nth-of-type(4){color:#2AB8CC;}
    .heade li:nth-of-type(5){color:#42bd56;}
    .center h1{float:left;font-size: 30px;font-weight:400;padding-left: 20px;color:black}
	.float{clear:both;text-align: left}
    .float li{display:inline-block;padding-left:8%;padding-right:4%;width: 132px;height: 189px}
    .float img{width: 180px;height:250px;margin-top: 20px}
    .float strong{overflow:hidden;display:inline-block;width:180px;height:40px;font-size:26px;}
    .float p{font-size:20px;margin:0;}
</style>