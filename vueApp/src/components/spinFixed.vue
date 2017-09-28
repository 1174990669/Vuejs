<template>
<div>
	<div class="footer">
        <ul class="nav-foot">
            <li>
                <router-link to='/spin/recommend' tag='i'>
                    <span>商城</span>
                </router-link>
            </li>
            <li>
                <router-link to='/sq/tj' tag='i'>
                    <span>社区</span>
                </router-link>
            </li>
            <li >
                <router-link to='/cart/cartone' tag='i'>
                    <span>购物车</span>
                </router-link>
            </li>
            <li >
                <router-link to='/me/meatwo' tag='i'>
                    <span>我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<style scoped>
	.footer{position: fixed;bottom:0;width:7.5rem;background: #fff;z-index:1;}
    .footer ul li{position:relative;float: left;width:25%;text-align: center;font-size:.26rem;margin:.1rem 0;}
    .footer ul li i{display:inline-block;width:.6rem;height:.6rem;font-style: normal;margin-bottom: .3rem;background:url(../../static/images/icon.png)no-repeat;background-size: 2.4rem .6rem;}
    .footer li:nth-of-type(2) i{background-position: -.6rem 0!important}
    .footer li:nth-of-type(3) i{background-position: -1.2rem 0!important}
    .footer li:nth-of-type(4) i{background-position: -1.8rem 0!important}
    .footer li span{position:absolute;width:100%;top:.6rem;left: 0;}
    .abc{color:#65c4aa;background: url(../../static/images/icon-active.png) no-repeat!important;
    background-size: 2.4rem .6rem!important;z-index: 999;}
</style>