<template>
<nav class="nav-head">
	<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
	    <swiper-slide style='width: 100%;height: 100%;' v-for='item in da'>
	    	<img :src="item.img" alt="">
			    <p>{{item.p1}}<br/>{{item.p2}}</p>
		</swiper-slide>

		<!-- <swiper-slide style='width: 100%;height: 100%;'>
			<img src="../../static/images/02.jpg" alt="">
			    <p>场景化购物体验<br/>所见即所买</p>
		</swiper-slide> -->

	    <div class="swiper-pagination"  slot="pagination" id="swiper-pagination"></div>
	    
  	</swiper>
  	<router-link to='/den' tag='button'>登录</router-link>
	<router-link to='/zhu' tag='button'>注册</router-link>
	<span id="span-fixed">条款和条约</span>
</nav>
</template>
<script>
require('swiper/dist/css/swiper.css')

   window.onload = function(){
      getRem(750,100)
  };
  window.onresize = function(){
      getRem(750,100)
      // window.location.reload()
  };
  function getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
  }

	var fn = [
		{img:'./static/images/01.jpg',p1:'家居海归货',p2:'大牌设计 欧美品质'},
		{img:'./static/images/02.jpg',p1:'场景化购物体验',p2:'所见即所买'},
		{img:'./static/images/03.jpg',p1:'全新社区FEED流',p2:'和懂生活的人做朋友'},
		{img:'./static/images/04.jpg',p1:'关于家的一切',p2:'总有故事来表达'},
	]
export default{

	// props:['data'],
	data(){
		return{
			da:fn,
			notNextTick: true,
	        swiperOption: {
	          autoplay: 2000,
	          loop:true,
	          direction : 'horizontal',
	          grabCursor : false,
	          setWrapperSize :true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : true,
	          observeParents:true,
	          debugger: true,
	          autoplayDisableOnInteraction : false,
	        }
		}
	},
	/*methods:{

	}*/
}
</script>

<style scoped>
	*{width: 100%;height: 100%; }
	nav{width:100%;height:100vh;position:relative;} 
	swiper-slide{width: 100%;height:100%;}
	.swiper-container{width:100%;height:100%;overflow: hidden}
	.swiper-wrapper{opacity:0.4;width: 100%;height: 100%;}
	#swiper-pagination{bottom:3.5rem;height:1rem;}
	.swiper-pagination-bullet-active{background: white;}
	.swiper-slide{height: 100%;width: 100%;
		-webkit-filter: grayscale(100%);
	    -moz-filter: grayscale(100%);
	    -ms-filter: grayscale(100%);
	    -o-filter: grayscale(100%);
	    filter: grayscale(100%);
	    filter: gray;
	}
	.swiper-slide p{color:white;position: absolute;bottom:6.18rem;font-size:.4rem;text-align: center;width:100%;height: 0;}
	button{width:2.58rem;height:.80rem;font-size:.3rem;position:absolute;bottom:1.88rem;z-index: 99;padding:0;;border:none;outline:none;border-radius:.2rem}
	button:nth-of-type(1){background:#65C4AA;color:#fff;left:.94rem;}
	button:nth-of-type(2){background:#fff;color:#404040;left:3.98rem;}
	#span-fixed{position:absolute;bottom:.78rem;color:white;z-index: 99;font-size:.3rem;height: .4rem;width:100%;text-align: center;}
</style>