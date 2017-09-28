<template>
	<div class="hint">
        <div class="hint-box">
            <p>确定要删除这个商品吗？</p>
            <p><router-link to='/cart/cartone' tag='span'>取消</router-link><span class="delete">删除</span></p>
        </div>
    </div>
</template>
<style scoped>
	.hint{top:0; width:100vw;height:100vh;background:rgba(0,0,0,0.5);position: absolute;z-index: 9999;}
    .hint .hint-box{width:4.3rem;height:2.32rem; position:absolute;top:50%;left:50%; transform: translate(-50%,-50%);font-size: .32rem;text-align: center;border-radius: .08rem;background: #fff;}
    .hint .hint-box p{height:49.5%;line-height:1.16rem;}
    .hint .hint-box p:nth-of-type(1){border-bottom: 1px solid #ececec;}
    .hint .hint-box p:nth-of-type(2) span{display: inline-block;width:49.5%;}
    .hint .hint-box p:nth-of-type(2) .delete{border-left: 1px solid #ececec;color:#fd888b;}
</style>