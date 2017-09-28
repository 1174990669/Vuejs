<template>
	<div>
		<sp></sp>
		<!-- <swipe :data="data1"></swipe> -->
		<router-view></router-view>
        <spin-fixed></spin-fixed>
    </div>
</template>
<script>
import sp from '../components/sp'
import swipe from '../components/swipe'
import spinFixed from '../components/spinFixed'
export default{
	data(){
		return{
			/*data1:[
                {'img':'./static/images/recommend1.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/recommend2.jpg'
                    // 'span':刷刷地址
                },
                {'img':'./static/images/recommend3.jpg'
                    // 'span':刷刷地址
                }
            ]*/
		}
	},
	components:{
		sp,spinFixed,swipe
	}
}
</script>
