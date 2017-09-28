<template>
	<div class="th">
		<div class="head">
			<h3><span><</span>出境游<i>></i></h3>
		</div>
		<div class="center">
			<ul class="cen-ul">
				<li>目的地&nbsp;&nbsp;ν</li>
				<li>时间天数&nbsp;&nbsp;ν</li>
				<li>筛选&nbsp;&nbsp;ν</li>
			</ul>
		</div>
		<p class="p"></p>
		<div class="fixed">
			<ul class="fi-ul">
				<li v-for="item in np">
					<img v-bind:src="item.img" alt="">
					<!-- <img src="/static/img/s10.jpg" alt=""> -->
					<a>{{item.ta}}</a>
					<h4>{{item.th}}</h4>
					<p>{{item.tp}} &nbsp;{{item.tpp}}</p>
					<p><span class="sp1">荐</span><span class="sp2">惠</span></p>
					<strong>{{item.tst}}</strong>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
var npm=[
	{	
		img:'./static/img/s1.jpg',
		ta:'深圳出发',
		th:'【温泉】澳大利亚温泉度假区8天7晚特 色亲子温泉 畅泡温泉享早餐',
		tp:'行程天数:8天',
		tpp:'团期:02-05 02-18',
		tst:'￥11880'
	},
	{	
		img:'./static/img/s2.jpg',
		ta:'深圳出发',
		th:'【珊瑚岛】马尔代夫六星级神仙珊瑚岛自由行4晚水上按摩池别墅',
		tp:'行程天数:5天',
		tpp:'团期:02-05 02-18',
		tst:'￥17299'
	},
	{
		img:'./static/img/s3.jpg',
		ta:'深圳出发',
		th:'【香港自由行】迪士尼乐园+海洋公园门票/四星酒店/支持房型升级',
		tp:'行程天数:8天',
		tpp:'团期:02-02 02-10',
		tst:'￥11880'
	},
	{
		img:'./static/img/s4.jpg',
		ta:'深圳出发',
		th:'【跟团游】泰国 曼谷 芭提雅 金沙岛 五天四晚跟团游',
		tp:'行程天数:5天',
		tpp:'团期:02-05 02-18',
		tst:'￥1499'
	},
	{
		img:'./static/img/s5.jpg',
		ta:'深圳出发',
		th:'【巴厘岛】巴厘岛连线新加坡6晚7日跟团旅游 含新加坡景点',
		tp:'行程天数:8天',
		tpp:'团期:02-05 02-18',
		tst:'￥16880'
	},
]
export default{
	name:'th',
	data(){
		return {
			np:npm,
		}
	}
}
</script>
<style scoped>
	.head{width:750px;height:68px;background: #0ca3f0}
	.head span{float:left;}
	h3{font-size: 34px;color: white;margin:0;line-height: 60px}
	span{float:left;padding-left: 20px}
	i{float:right;padding-right:20px}
	.cen-ul{border-bottom: 1px solid gray}
	.cen-ul li{width:240px;height: 80px;background: #ffffff;display: inline-block;line-height: 80px;font-size: 24px;color: #666}
	.p{height: 40px;background: #efeff4;border-bottom: 1px solid gray;border-top:1px solid gray;}
	.fi-ul li{border-bottom: 1px solid gray;padding:14px 0 80px 0;height: 180px}
	.fi-ul img{float: left;margin:30px 0 0 20px;}
	.fi-ul a{position:relative;left:-366px;top:170px;font-size:24px;text-decoration: none;background: rgba(0,0,0,0.4);width: 189px;height:50px;display:inline-block;color: white;}
	.fi-ul h4{font-size: 22px;color:black;margin:-14px 0 0 0;padding:0 30px 0 230px;text-align:left;}
	.fi-ul p{font-size:24px;color:#666;text-align: left;padding-left:230px;margin-top: 14px}
	.fi-ul span{padding:6px 15px;border-radius: 20%;color: white;font-size: 20px}
	.fi-ul .sp1{background: #ff9a14}
	.fi-ul .sp2{background: #75bd03;margin-left: 10px}
	.fi-ul strong{font-size:40px;color: #ff4e07;float: right;padding-right: 30px;margin-top: 30px}
</style>