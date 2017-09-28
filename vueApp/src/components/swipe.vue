<template>
<div>
	<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class='swiper-container'>
	    <swiper-slide v-for='item in data'>
	    	<img :src="item.img" alt="图片开小差啦">
		</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination" id="swiper-pagination"></div>
	</swiper>
</div>
</template>
<script>
export default{
	props:['data'],
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
	created(){
   	 this.menu()
	  },
	methods:{
	    menu(){
	      window.scrollTo(0,0);
	    }
	  }
	// mounted(){
      // console.log(this.data)
    // }
}
</script>
<style scoped>
	.swiper-container{width:100%;height:3.8rem;margin-top: 1.8rem;}
    .swiper-container swiper-slide{width: 100%;height:3.8rem;}
    .swiper-container img{width: 100%;height: 100%;}
</style>