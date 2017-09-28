<template>
	<div class="body">
		<nav>
			<router-link to='/cart/cartone' tag='span'><</router-link>
			<span>确定订单</span>
		</nav>
		<section>
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
					<span>运送费</span>
					<span>></span>
					<span></span>
					<span>赠送</span>
				</div>
				<div class="bom">
					<span>备注：</span>
					<input type="text" placeholder="填写补充内容">
				</div>
				<div class="bom">
					<ul>
						<li>共一件商品</li>
						<li>小计：</li>
						<li>￥169</li>
					</ul>
				</div>
			</div>
		</section>
		<footer>
			<div class="right" v-on:click='fo=!fo'>提交订单</div>
			<div class="left">
				<span>共计：</span>
				<span>￥169</span>
			</div>
		</footer>
		<!-- 确认支付 -->
		<div class="bo" v-show='fo'>
			<div class="zf">
				<div class="botn">
					<div class="tit">
						<span v-on:click='fo=!fo'>X</span>
						<span>支付详情</span>
					</div>
					<div class="messag">
						<span>支付账号：</span>
						<span>132****0968</span>
					</div> 
					<div class="messag">
						<span>支付方式：</span>
						<span>余额 ></span>
					</div>
					<div class="messag">
						<span>支付金额：</span>
						<span style="color: #fe898c;">￥169</span>
					</div>
					<div class="btn">
						<div class="bt" v-on:click='zhi'>确定支付</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 支付页面 -->
		<div class="zf" v-show='fn'> 
			<div class="botn">
				<div class="tit">
					<span v-on:click='fn=!fn'>X</span>
					<span>支付密码</span>
				</div>
				<div class="ks">
					<ul class="kk">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li style="border-right: 0;"></li>
					</ul>
					<ul class="kn">
						<li><span>1</span><span>&nbsp;</span></li>
						<li><span>2</span><span>ABC</span></li>
						<li><span>3</span><span>DEF</span></li>
						<li><span>4</span><span>GHI</span></li>
						<li><span>5</span><span>JKL</span></li>
						<li><span>6</span><span>MNO</span></li>
						<li><span>7</span><span>PQRS</span></li>
						<li><span>8</span><span>TUV</span></li>
						<li><span>9</span><span>WXYZ</span></li>
						<li class="cm">&nbsp;</li>
						<li class="cm">0</li>
						<li class="cm"><img src="../../static/images/jt.png"></li>
					</ul>
				</div>
				<div class="btn">
					<router-link to='/order/orderfour' tag='div' class="bt">确定</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			fo:'',
			fn:''
		}
	},
	methods:{
		zhi(){
			this.fo = !this.fo
			this.fn = !this.fn
		}
	}
	
}
</script>
<style scoped>
	*{padding: 0;margin: 0;font-family: '微软雅黑';font-size: 0.36rem;}
	.body{background: #f9f9f9;}
	nav{position: fixed;top: 0;z-index: 1;width: 100%;height: 0.9rem;text-align: center;line-height: 0.90rem;box-shadow: 0 0 4px #a09e9e;background: #fff;}
	nav span:nth-child(1){float: left;padding-left: 0.3rem;}
	nav span:nth-child(2){padding-right: 0.5rem;}
	section{background: #f9f9f9;margin: 0.95rem 0 1.4rem;}
	section .title{background: #fff;width: 100%;height: 1.9rem;box-shadow: 0 0 0.05rem #a09e9e;}
	section .title .top{height: 0.66rem;width: 100%;}
	section .title .top span{font-size: 0.25rem;}
	section .title .top span:nth-child(1){padding-top: 0.36rem;padding-left: 0.72rem;float: left;color: #484848;}
	section .title .top span:nth-child(2){padding-top: 0.36rem;padding-right: 0.45rem;color: #747474;float: right;}
	section .title .bot{font-size: 0.3rem;margin: 0.15rem 0 0;position: relative;}
	section .title .bot img{position: absolute;margin-left: 0.3rem;width: 0.24rem;height: 0.3rem;}
	section .title .bot p{padding-left: 0.75rem;width: 5.98rem;height: 0.7rem;color: #747474;font-size: 0.28rem;}
	section .title #line{width: 100%;}
	section .central{margin-top: 0.2rem;background: #fff;width: 100%;height: 6.22rem;}
	section .central .tit{margin: 0 auto;width: 6.85rem;line-height: 0.7rem;color: #404040;height: 0.7rem;font-size: 0.24rem;border-bottom: 0.04rem solid #ececec;}
	section .central .messag{width: 100%;height: 2.1rem;background: #fff;position: relative;border-bottom: 1px solid #ececec;}
	section .central .messag img{margin-top:0.25rem;margin-left:0.33rem;width:1.6rem;height: 1.6rem;}
	section .central .messag .shop-messag{position:absolute;margin-left:1.2rem;display:inline-block;}
	section .central .messag .shop-messag p{margin-top: 0.22rem;}
	section .central .messag .shop-messag p:nth-child(1){font-size: 0.25rem;}
	section .central .messag .shop-messag p:nth-child(2){font-size: 0.24rem;color: #6a6a6a;}
	section .central .messag .shop-messag p:nth-child(3){width: 3.28rem;}
	section .central .messag .shop-messag p:nth-child(3) span:nth-child(1){float: left;font-size: 0.25rem;color: #fd888b;}
	section .central .messag .shop-messag p:nth-child(3) span:nth-child(2){font-size: 0.25rem;float: right;}
	section .central .bom{background: #fff;width: 100%;height: 0.9rem;line-height: 0.9rem;border-bottom: 1px solid #ececec;}
	section .central .bom span{color: #404040;padding-left: 0.3rem;font-size: 0.25rem;}
	section .central .bom span:nth-child(2){color: #a2a2a2;padding-right: 0.3rem;padding-left: 0.1rem;float: right;}
	section .central .bom span:nth-child(3){color: #fd888b;float: right;}
	section .central .bom span:nth-child(4){float: right;}
	section .central .bom input{border:none;outline: none;font-size: 0.25rem;}
	section .central .bom ul{float: right;margin-right: 0.3rem;}
	section .central .bom ul li{font-size: 0.25rem;display: inline-block;}
	section .central .bom ul li:nth-child(1){padding-right: 0.7rem}
	section .central .bom ul li:nth-child(3){color: #fd888b;}
	footer{border-top: 1px solid #ccc;width: 100%;height: 1rem;position: fixed;bottom: 0;z-index: 1;background: #fff;line-height: 1rem;}
	footer .left{font-size: 0.34rem;padding-right: 0.95rem;float: right;display: inline-block;}
	footer .left span:nth-child(2){color: #fd888b}
	footer .right{float: right;padding: 0 0.35rem;color: #fff;background: #65c4aa;font-size: 0.34rem;}

	.bo{overflow: hidden;}
	/*确认支付*/
	.zf{position:absolute;top:0;width: 100%;height:6.2rem;background: rgba(0,0,0,0.4);z-index: 99;}
	.zf .botn{width: 100%;height: 6.94rem;background: #fff;position: fixed;bottom:1rem;}
	.zf .botn .tit{width: 100%;height: 1.3rem;border-bottom: .04rem solid #ececec;text-align: center;line-height: 1.3rem;}
	.zf .botn .tit span:nth-child(1){float: left;padding-left: 0.72rem;}
	.zf .botn .tit span:nth-child(2){padding-right: 0.72rem;}
	.zf .botn .messag{width: 100%;height: 1.24rem;border-bottom: .04rem solid #ececec;text-align: center;line-height: 1.24rem;clear:both;
	}
	.zf .botn .messag span:nth-child(1){float: left;padding-left: 0.72rem;}
	.zf .botn .messag span:nth-child(2){float: right;padding-right: 0.72rem;}
	.zf .botn .btn{width: 100%;height: 1.7rem;}
	.zf .botn .btn .bt{width: 5.8rem;height: 1.1rem;background: #65c4aa;border-radius: 0.08rem;text-align: center;line-height: 1.1rem;color: #fff;font-size: 0.32rem;margin: 0.32rem auto;
	}


	/*支付页面*/
	.zf{
			width: 100%;
			height:6.2rem;
			background: rgba(0,0,0,0.1);
		}
		.zf .botn{
			width: 100%;
			height: 8.2rem;
			background: #fff;
			position: fixed;
			bottom: 0;
		}
		.zf .botn .tit{
			width: 100%;
			height: 1.1rem;
			text-align: center;
			line-height: 1.2rem;
		}
		.zf .botn .tit span:nth-child(1){
			float: left;
			padding-left: 0.72rem;
		}
		.zf .botn .tit span:nth-child(2){
			padding-right: 0.72rem;
		}
		.zf .botn .btn{
			width: 100%;
			height: 1.6rem;
		}
		.zf .botn .btn .bt{
			width: 5.8rem;
			height: 1.1rem;
			background: #65c4aa;
			border-radius: 0.08rem;
			text-align: center;
			line-height: 1.1rem;
			color: #fff;
			font-size: 0.32rem;
			margin: 0.32rem auto;
		}
		.zf .botn .ks .kk{
			display: inline-block;
			padding: 0;
			margin-left: 0.45rem;
			border: 0.02rem solid #979797;
			font-size: 0;
		}
		.zf .botn .ks .kk li{
			width: 0.8rem;
			height: 0.8rem;
			border-right: 1px solid #e5e5e5;
			text-align: center;
			line-height: 0.8rem;
			font-size: 0.25rem;
			list-style: none;
			display: inline-block;
		}
		.zf .botn .ks .kn{
			font-size: 0;
			margin-top: 0.25rem;
			width: 100%;
			height: 4.3rem;
		}
		.zf .botn .ks .kn li{
			text-align: center;
			font-size: 0.4rem;
			height: 1.04rem;
			width: 2.45rem;
			border: 1px solid #ccc;
			display: inline-block;
		}
		.zf .botn .ks .kn .cm{
			line-height: 1.04rem;
		}

		.zf .botn .ks .kn li span{
			margin-top: 0.05rem;
			display:block;
			font-size: 0.2rem;

		}
		.zf .botn .ks .kn li span:nth-child(1){
			font-size: 0.4rem;
		}
		.zf .botn .ks .kn li:nth-child(10){
			background: #d1d5db;
		}
		.zf .botn .ks .kn li:nth-child(12){
			background: #d1d5db;
		}
		.zf .botn .ks .kn li:nth-child(12) img{
			width: 0.45rem;
			height: 0.3rem;
		}
</style>