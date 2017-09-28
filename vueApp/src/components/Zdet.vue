<template>
	<div class="add">
	    <h2>请选择数量和规格
	    	<router-link to='/page'><img src="../../static/images/delete.png" alt=""></router-link>
	    </h2>
	    <ul class="cart-box">
	        <li><img src="../../static/images/cart1.png" alt=""></li>
	        <li class="cart-detail">
	            <p class="price">$ 169</p>
	            <p>请选择规格和数量</p>
	            <p class="num"><span>-</span><span>1</span><span>+</span></p>
	        </li>
	    </ul>
	    <h3>颜色</h3>
	    <ul class="color">
	        <li>哑光绿</li>
	        <li>哑光黑</li>
	        <li>哑光红</li>
	        <li>哑光白</li>
	    </ul>
	</div>
</template>
<style scoped>
	.add{width:7.5rem;padding-bottom: .24rem;position:fixed;bottom:1rem;background:#fff;font-size:.26rem;z-index: 9999;left:0;}
    .add h2{height:1.2rem;padding:0 .23rem;border-bottom:.02rem solid #eaeaea; line-height: 1.2rem;font-weight:400;font-size:.3rem;position: relative;}
    .add h2 img{width:.32rem;height:.32rem;position: absolute;top:50%;right:.32rem;transform:translateY(-50%);}
    .cart-box{height:2rem; position: relative;background: #fff;padding:0 .34rem;margin: .4rem 0;}
    .cart-box li{display: inline-block;font-size: .26rem}
    .cart-box li img{width:1.8rem;height:1.8rem;border:.02rem solid #f9f9f9;border-radius:0.06rem;position:absolute;top:50%;transform: translateY(-50%);border:1px solid #f9f9f9;border-radius:0.06rem;box-shadow: 0 .01rem .03rem #999;}
    .cart-box .cart-detail{position: absolute;left:2.5rem;padding-top:.2rem;}
    .cart-detail p{margin-bottom:.18rem;}
    .cart-detail .price{color:#fd888b;}
    .cart-detail .num{display: inline-block; border-radius:.06rem;border:.02rem solid #8b8b8b;}
    .cart-detail .num span{display: inline-block;width:.62rem;height:.62rem;line-height: .62rem;text-align: center;}
    .cart-detail .num span:nth-of-type(2){border-left:.02rem solid #8b8b8b;border-right:.02rem solid #8b8b8b;}
    .add h3{padding:0 .32rem;margin-bottom: .3rem; font-weight: 400;color:#6a6a6a;}
    .add .color{padding:0 .32rem;}
    .add .color li{float:left; width:2rem;height:.8rem;margin:0 .32rem .24rem 0; border:.02rem solid #8b8b8b;border-radius:.08rem; line-height:.8rem;text-align:center;}
    .add .color li:nth-of-type(3n+0){margin-right: 0;}	
</style>