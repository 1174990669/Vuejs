<template>
  <div>
    <hea></hea>
    <router-view></router-view>
  </div>
</template>
<script>
import hea from '../components/search-head'
export default{
  components:{
    hea
  }
}
</script>
<style scoped>
 	
	/*.homeNav{margin-top:.7rem;}*/
	.homeNav li{border-bottom:1px solid #efefef;padding-left:.18rem;height:1.32rem}
	.homeNav img{width:.72rem;height:.72rem;margin:.28rem 0 .32rem 0;}
	.homeNav p{width:3.5rem;margin:-1.1rem 0 0 1.0rem;font-size: .3rem;color:#404040;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
	.homeNav strong{font-size:.3rem;color:#404040;float:right;margin:-0.5rem .34rem 0 0;border:1px solid gray;border-radius:.52rem;width:1.40rem;height:.58rem;text-align:center;
			line-height:.60rem}
</style>