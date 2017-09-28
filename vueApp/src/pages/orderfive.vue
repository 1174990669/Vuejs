<template>
	<div>
		<nav>
			<router-link to='/order/orderfour' tag='span'><</router-link>
			<span>订单详情</span>
		</nav>
		<section>
			<div class="bj">
				<img src="../../static/images/tg15.png">
				<p>
					<span>卖家正在努力派件</span>
					<span>你的包裹正整装待发</span>
				</p>
			</div>
			<div class="title">
				<div class="top">
					<span>收货人：西瓜西瓜</span>
					<span>收货号码：13265236932</span>
				</div>
				<div class="bot">
					<img src="../../static/images/address.png">
					<p>收货地址：深圳市龙华新区三联创业路龙华广场45号深圳市龙华新区三联创业路龙华广场45号</p>
				</div>
				<img src="../../static/images/line.png" id="line">
			</div>
			<div class="central">
				<div class="tit">商品信息</div>
				<div class="messag">
					<img src="../../static/images/tg14.png">
					<div class="shop-messag">
						<p>line高白玉骨瓷马克杯</p>
						<p>颜色分类：哑光绿</p>
						<p>
							<span>￥169</span>
							<span>X1</span>
						</p>
					</div>
				</div>
				<div class="bom">
					<span>快递</span>
					<span>></span>
					<span>￥0.00</span>
				</div>
				<div class="bom">
					<ul>
						<li>共一件商品</li>
						<li>小计：</li>
						<li>￥169</li>
					</ul>
				</div>
			</div>
			<div class="lx">
				<div class="me">联系我们</div>
				<div class="jy">
					<p><span>订单编号：</span><span>945921662030110</span><span>复制</span></p>
					<p><span>交易编号：</span><span>20170428100100169302569841256</span></p>
					<p><span>交易时间：</span><span>2017-05-12 12：05：20</span></p>
				</div>
			</div>
		</section>
	</div>
</template>
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
			background: #f9f9f9;
			margin: 0.9rem 0 0;
		}
		section .title{
			background: #fff;
			width: 100%;
			height: 1.9rem;
			box-shadow: 0 0 0.05rem #a09e9e;
		}
		section .title .top{
			height: 0.66rem;
			width: 100%;
		}
		section .title .top span{
			font-size: 0.25rem;
		}
		section .title .top span:nth-child(1){
			padding-top: 0.36rem;
			padding-left: 0.72rem;
			float: left;
			color: #484848;
		}
		section .title .top span:nth-child(2){
			padding-top: 0.36rem;
			padding-right: 0.45rem;
			color: #747474;
			float: right;
		}
		section .title .bot{
			font-size: 0.3rem;
			margin: 0.15rem 0 0;
			position: relative;
		}
		section .title .bot img{
			position: absolute;
			margin-left: 0.3rem;
			width: 0.24rem;
			height: 0.3rem;
		}
		section .title .bot p{
			display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    overflow: hidden;
			padding-left: 0.75rem;
			width: 5.98rem;
			height: 0.7rem;
			color: #747474;
			font-size: 0.28rem;
		}
		section .title #line{
			width: 100%;
		}
		section .central{
			margin-top: 0.2rem;
			background: #fff;
			width: 100%;
			height: 4.75rem;
		}
		section .central .tit{
			margin: 0 auto;
			width: 6.85rem;
			line-height: 0.7rem;
			color: #404040;
			height: 0.7rem;
			font-size: 0.24rem;
			border-bottom: 0.04rem solid #ececec;
		}
		section .central .messag{
			width: 100%;
			height: 2.1rem;
			background: #fff;
			position: relative;
			border-bottom: 0.04rem solid #ececec;
		}
		section .central .messag img{
			margin-top: 0.25rem;
			margin-left: 0.33rem;
			width: 1.6rem;
			height: 1.6rem;
		}
		section .central .messag .shop-messag{
			position: absolute;
			margin-left: 1.2rem;
			display: inline-block;
		}
		section .central .messag .shop-messag p{
			margin-top: 0.22rem;
		}
		section .central .messag .shop-messag p:nth-child(1){
			font-size: 0.25rem;
		}
		section .central .messag .shop-messag p:nth-child(2){
			font-size: 0.24rem;
			color: #6a6a6a;
		}
		section .central .messag .shop-messag p:nth-child(3){
			width: 3.28rem;
		}
		section .central .messag .shop-messag p:nth-child(3) span:nth-child(1){
			float: left;
			font-size: 0.25rem;
			color: #fd888b;
		}
		section .central .messag .shop-messag p:nth-child(3) span:nth-child(2){
			font-size: 0.25rem;
			float: right;
		}
		section .central .bom{
			width: 100%;
			height: 0.9rem;
			line-height: 0.9rem;
			border-bottom: 0.04rem solid #ececec;
		}
		section .central .bom span{
			color: #404040;
			padding-left: 0.3rem;
			font-size: 0.25rem;
		}
		section .central .bom span:nth-child(2){
			color: #a2a2a2;
			padding-right: 0.3rem;
			padding-left: 0.1rem;
			float: right;
		}
		section .central .bom span:nth-child(3){
			color: #fd888b;
			float: right;
		}
		section .central .bom span:nth-child(4){
			float: right;
		}
		section .central .bom ul{
			float: right;
			margin-right: 0.3rem;
		}
		section .central .bom ul li{
			font-size: 0.25rem;
			display: inline-block;
		}
		section .central .bom ul li:nth-child(1){
			padding-right: 0.7rem
		}
		section .central .bom ul li:nth-child(3){
			color: #fd888b;
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
		section .lx{
			width: 100%;
			height: 3.11rem;
		}
		section .lx .me{
			width: 1.74rem;
			height: 0.58rem;
			margin: .1rem 0 0 .36rem;
			font-size: 0.28rem;
			line-height: 0.58rem;
			text-align: center;
			background: #65c4aa;
			border-radius: 0.08rem;
			color: #fff;
		}
		section .jy{
			width: 6.7rem;
			height: 0.87rem;
			margin: 0.24rem auto;
		}
		section .jy p span{
			font-size: 0.22rem;
		}
		section .jy p span:nth-child(2){
			color: #8b8b8b;
		}
		section .jy p span:nth-child(3){
			color: #fff;
			padding: 0 0.15rem;
			border-radius: .08rem;
			background: #65c4aa;
			float: right;
		}
</style>