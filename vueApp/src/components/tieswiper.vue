<template>
	<header class="new-header">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class='swiper-container' >
		    <swiper-slide style="width:7.5rem;height:7.4rem;background-size: 100% 100%;">
		    	<img src="../../static/images/newd.jpg" alt="图片开小差啦">
		    	<span>1/2</span>
			</swiper-slide>
			<swiper-slide style="width:7.5rem;height:7.4rem;background-size: 100% 100%;">
				<img src="../../static/images/m2.jpg" alt="图片开小差啦">
				<span>2/2</span>
			</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination" id="swiper-pagination"></div>
		</swiper>


		<router-link to='/me/meatwo'>
			<i class="iconfontone" style="background:url(./static/images/t.jpg)no-repeat;background-size:100% 100%;"></i>
		</router-link>
		<router-link to='/tie/tieone'>
			<i class="iconfonttwo" style="background:url(./static/images/fx.jpg)no-repeat;background-size:100% 100%;"></i>
		</router-link>
	</header>
</template>
<script>
export default{
	// props:['data'],
	data(){
		return{
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
		fh(){
			window.history.go(-1)
		}
	}*/
}
</script>
<style scoped>
	.swiper-container{width:100%;;height:7.4rem;}
	.swiper-slide img{width:7.5rem;height:7.4rem;}
	.new-header{position:relative;}
	i{position:absolute;width:.64rem;height:.64rem;border-radius:50%;top:.14rem;z-index: 99;}
	 .iconfontone{left:.1rem;}
	 .iconfonttwo{right:.2rem;}
	span{position: absolute;bottom:.4rem;right:.2rem;z-index: 99;width:.64rem;height:.64rem;border-radius:50%;background: #ededee;font-size:.3rem;text-align:center;line-height:.64rem;}
</style>