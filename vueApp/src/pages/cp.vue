<template>
	<div class="mask">
        <router-link to='/page'>
         <img src="../../static/images/delete2.png" alt="" class="delete">
        </router-link>
        <h2>分享赢取爱购好物新品测评机会</h2>
        <p class="du">如果好友通过你分享的链接完成购买，你就有机会被爱购君翻牌子获得新品测评的机会，分享越多，机会就越大噢！</p>
        <div class="box">
            <ul>
                <div><li><img src="../../static/images/WB_logo.png" alt=""></li><p>微博</p></div>
                <div><li><img src="../../static/images/feiend.png" alt=""></li><p>朋友圈</p></div>
                <div><li><img src="../../static/images/we_icon.png" alt=""></li><p>微信</p></div>
            </ul>
        </div>
    </div>
</template>
<style scoped>
	 	*{margin:0;padding:0;}
        li{list-style: none;}
        .mask{height:6.2rem; position:fixed;bottom:0;left:0;z-index:99;background: #cbcbcb;z-index: 9999;}
        .mask h2{height:1.58rem;padding:0 1rem;line-height: 1.58rem;font-size:.32rem;color:#404040;text-align: center;}
        .mask .delete{width:.32rem;height:.32rem; position: absolute;top:1.6rem;right:.32rem;}
        .mask .du{padding:0 1rem;margin-bottom: .86rem; font-size:.26rem;color:#4a4a4a;}
        .box{padding:0 1rem;}
        .mask ul{padding:.25rem 0; border-top: .02rem solid #bebebe;text-align: center;}
        .mask ul div{display: inline-block;}
        .mask ul li{width:1.16rem;height:1.16rem;border-radius: 50%;position:relative;font-size: .26rem}
        .mask ul p{margin:.16rem 0; font-size:.26rem;}
        .mask ul img{width:100%;height:100%;position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
        .mask ul div:nth-of-type(1) li{border:.02rem solid #f81926;}
        .mask ul div:nth-of-type(1) li img{width:60%;height:60%;}
        .mask ul div:nth-of-type(2) li{border:.02rem solid #6397cf;}
        .mask ul div:nth-of-type(2) li img{width:1.2rem;height:1.2rem;}
        .mask ul div:nth-of-type(3) li{border:.02rem solid #42ae3c;}
        .mask ul div:nth-of-type(3) li img{width:.75rem;height:.64rem;}
</style>