<template>
	<div class="tw">
		<div class="header" >
			<p>分类<span v-on:click="fun">></span></p>
		</div>
		<ul class="he-ul">
			<li v-for="item in da">
				<img v-bind:src="item.img" alt="">
				<h3>{{item.titl}}</h3>
				<router-link :to="item.one">
					<p>{{item.op}}<br/>{{item.ap}} <span>{{item.ospa}}</span></p>
				</router-link>
			</li>
		</ul>
	</div>
</template> 
<script> 
var data=[{
		img:'./static/1.jpg',
		titl:'出境游',
		op:'优质国外出境旅游,完整接送流程超过2000条',
		ap:'线路,任意选择',
		ospa:'>',
		one:'/thn'
	},{
		img:'./static/2.jpg',
		titl:'港澳游',
		op:'快速组团通关服务,让您快速到达目的地与多',
		ap:'家景点深入合作,让您畅游香港',
		ospa:'>',
		one:'/gan'
	},
	{ 
		img:'./static/3.jpg',
		titl:'国内游',
		op:'强大的接团队,通行全国超过3000条线路,消',
		ap:'费透明,高端享受',
		ospa:'>',
		one:'/gnn'
	},
	{
		img:'./static/4.jpg',
		titl:'周边游',
		op:'优质名宿、景点应有尽有配套出行,大型巴士',
		ap:'直达景点、酒店',
		ospa:'>',
		one:'/gzb'
	} 
	]
export default{
	
	name:'tw',
	data () {
    return {
      da:data,
      // msg: '手机大放送',
      // mg: '手机'
    }
  },
	methods:{
		fun(){
			// alert(1)
			window.history.go(1)
		}
	}
}
</script>

<style>
	a{text-decoration: none}
	.header{width: 750px;height:86px;background: #0ca3f0;}
	.header p{font-size: 30px;line-height:86px;color:white;}
	.header span{float: right;padding-right: 20px;font-size: 40px;color:white;}
	img{width:100px;height:100px;background:#4ab7f9;float: left;margin-left:20px;border-radius:50%}
	li{list-style:none;font-size:24px;color:#666;border-bottom:1px solid #666;padding-bottom:20px;height: 120px}
	h3{text-align: left;padding-left:140px;font-size: 28px;margin-bottom: 10px}
	.he-ul p{text-align: left;padding-left:140px;}
	.he-ul span{color:#666;float: right;padding-right:30px;margin-top: -22px;font-size: 24px}
</style>