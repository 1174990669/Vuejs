<template>
	<div>
		<router-link to='/orderone' tag='nav'>
			<span><</span>
			<span>支付成功</span>
		</router-link>
		<section>
			<div class="bj">
				<img src="../../static/images/tg15.png">
				<p>
					<span>买家已付款</span>
					<span>你的包裹正整装待发</span>
				</p>
			</div>
			<div class="btn">
				<router-link to='/order/orderfive' tag='p'>查看订单</router-link>
				<router-link to='/spin/recommend' tag='p'>返回商城</router-link>
			</div>
			<ul>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
				<li>
					<img src="../../static/images/tg16.png">
					<p>海绵洗碗擦</p>
					<p>￥9</p>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		created(){
			this.menu()
		},
		methods:{
			menu(){
				window.scrollTo(0,0)
			}
		}
	} 
</script>
<style scoped>
		*{
			padding: 0;
			margin: 0;
			font-family: '微软雅黑';
			font-size: 0.36rem;
		}
		nav{
			position: fixed;
			top: 0;
			z-index: 1;
			width: 100%;
			height: 0.9rem;
			text-align: center;
			line-height: 0.90rem;
			box-shadow: 0 0 0.05rem #a09e9e;
			background: #fff;
		}
		nav span:nth-child(1){
			float: left;
			padding-left: 0.3rem;
		}
		nav span:nth-child(2){
			padding-right: 0.5rem;
		}
		section{
			margin: 0.9rem 0 0;
		}
		section .bj{
			position: relative;
		}
		section .bj img{
			width: 100%;
			height: 2.24rem;
		}
		section .bj p{
			position: absolute;
			top: 0.8rem;
			left: 1.2rem;
			width: 2.6rem;
			height: 0.77rem;
			color: #fff;
		}
		section .bj p span{
			font-size: 0.28rem;
			float: right;
		}
		section .bj p span:nth-child(1){
			font-size: 0.32rem;
		}
		section .btn{
			width: 6.3rem;
			height: 1.3rem;
			margin: 0.42rem auto 0;
			border-bottom: 0.04rem solid #e6e6e6;
		}
		section .btn p{
			display: inline-block;
			font-size: 0.32rem;
			border-radius: 0.08rem;
			padding: 0.26rem 0.68rem;
			border: 0.02rem solid #65c4aa;
		}
		section .btn p:nth-child(2){
			float: right;
			background: #65c4aa;
			color: #fff;
		}
		section ul li{
			display: inline-block;
			font-size: 0;
			width: 3.42rem;
			height: 4.6rem;
			margin: 0.138rem;
		}
		section ul li img{
			width: 100%;
			height: 3.42rem;
		}
		section ul li p{
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
			text-align: center;
			margin-top: 0.2rem;
			padding: 0 0.2rem;
			font-size: 0.28rem;
		}
		section ul li p:nth-child(3){
			color: #fd888b;
		}
</style>