<template>
    <div class="div-head">
        <div class="header">
            <h1>我的购物车<img src="../../static/images/title.png" alt=""></h1>
            <div class="desc">
                <span><img src="../../static/images/sure.png" alt="">欧美质量标准</span><span><img src="../../static/images/sure.png" alt="">30天无忧退货</span><span><img src="../../static/images/sure.png" alt="">24小时快速发货</span>
            </div>
        </div>
        <ul class="cart-box" v-for='(item,index) in da'>
            <li>
                <i class="check" v-on:click='ff(index)'>
                    <span v-show='item.start' class="sp"></span>
                </i>
            </li>
            <li><img :src="item.img" alt=""></li>
            <li class="cart-detail">
                <p>{{item.p1}}</p>
                <p>{{item.p2}}</p>
                <p class="num">
                    <span @click='jj(index)'>-</span>
                    <span >{{item.number}}</span>
                    <span @click='ja(index)' >+</span>
                </p>
            </li>
              <img src="../../static/images/ls.png" alt="" class="right"
              v-on:click='sh(index)'>
            <li class="price"><p>￥{{item.zo}}</p></li>   
        </ul>

        <div class="count">
            <i class="check" v-on:click='qu'>
                <span class="sp" v-show='qb'></span>
            </i>
            <span class="all">全选</span>
            <span class="sum">总计 （不含运费）：<span>￥ {{allprice}}</span></span>
            <router-link to='/orderone' tag='button'>立即下单</router-link>
        </div>
        <router-view></router-view>
        <spinFixed></spinFixed><!-- json parse-->

        <!-- 删除部分 -->
        <div class="hint"  v-show='fo'>
            <div class="hint-box">
                <p>确定要删除这个商品吗？</p>
                <p>
                    <span v-on:click='fo=!fo'>取消</span>
                    <span class="delete" v-on:click='shan'>删除</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import spinFixed from '../components/spinFixed'

    var he = [
        {
            img:'./static/images/cart1.png',
            p1:'Line高白玉骨瓷马克杯',
            p2:'颜色：哑光绿',
            p3:'169',
            number:'1',
            start:0,
            zo:'169'
        },
        {
            img:'./static/images/cart2.png',
            p1:'LED小台灯',
            p2:'颜色：米白色',
            p3:'69',
            number:'1',
            start:0,
            zo:'69'
        },
    ];
    
export default{
    data(){
        return{
            inde:'',
            da:he,
            qb:false,
            ma:0,
            fo:''
        }
    },
    methods:{
        sh(inde){
            this.fo = !this.fo
            this.inde=inde;
        },
        shan(ev){
            this.fo =!this.fo
            this.da.splice(this.inde,1);
        },
        ja(abc){
            this.da[abc].number++;
            this.da[abc].zo = this.da[abc].number*this.da[abc].p3;
        },
        jj(abc){
            if (this.da[abc].number>1) {
                this.da[abc].number--
            }
            this.da[abc].zo = this.da[abc].p3*this.da[abc].number;

        },
        ff(abc){
            this.da[abc].start = !this.da[abc].start;
        },
        qu(){
            this.qb = !this.qb;
            for (var i = 0; i < this.da.length; i++) {
                this.da[i].start = this.qb;
            }
        },
    },
    computed:{
        allprice(abc){
            var ma=0;
            for (var i = 0; i < this.da.length; i++) {
                if (this.da[i].start = this.da[i].start) {
                    ma+=parseInt(this.da[i].zo);
                } 
            }
                return  ma
            
        }
    },
    components:{
        spinFixed
    },
}
</script>
<style scoped>
    *{margin:0;padding:0;}
    .div-head{background: #f9f9f9;position: relative;padding-bottom: 2.3rem;}
    
	.iconfont{font-size: .26rem;}
    .header{padding-top:.2rem;background: #fff;}
    .header h1{font-size: .32rem;text-align: center;position: relative;}
    .header h1 img{width:.36rem;vertical-align: middle;position: absolute;right:.32rem;}
    
    .desc{padding:0 .12rem; margin:.03rem 0;color:#6a6a6a;margin-top: -0.5rem;}
    
    .desc img{width:.3rem;height:.3rem;margin-right:.1rem; border-radius:50%; vertical-align: middle;}
    
    .desc span{display: inline-block; width:32.5%; font-size: .26rem;text-align: center;}
    
    .desc span:nth-of-type(3){width:35%;}
    
    .cart-box{height:2rem; position: relative;background: #fff;padding:.4rem .34rem;margin-bottom: .28rem;}
    
    .cart-box li{display: inline-block;font-size: .26rem}
    
    .cart-box .check{display: inline-block;width:.36rem;height:.36rem;border:.03rem solid #666;border-radius: 50%;position:absolute;top:50%;transform: translateY(-50%);}
    
    .check .sp{position: absolute;width:.3rem;height: .3rem;background:#65c4aa;border-radius:50%;top:.02rem;left:.03rem;}
    
    .cart-box li img{width:1.6rem;height:1.6rem;margin:0 .18rem; border:1px solid #f9f9f9;border-radius:0.06rem;position:absolute;top:50%;transform: translateY(-50%);left:.8rem;}
    
    .cart-box .cart-detail{position: absolute;left:3rem;}

    .cart-detail p{margin-bottom:.32rem;}

    .cart-detail .num{display:inline-block;border-radius:.06rem;border:.02rem solid #8b8b8b;}
    
    .cart-detail .num span{display: inline-block;width:.62rem;height:.62rem;line-height: .62rem;text-align: center;}
    
    .cart-detail .num span:nth-of-type(2){border-left:.02rem solid #8b8b8b;border-right:.02rem solid #8b8b8b;}
    
    .cart-box .right{width:.34rem;height:.4rem;position: absolute;right:.34rem;top:.4rem;}
    
    .cart-box .price{position: absolute;bottom:.4rem;right:.34rem;color:#fd888b;}
    
    .count{position:fixed;padding:.23rem .32rem; bottom:1.16rem;font-size:.26rem;background: #fff;width:100%;height:.68rem;}
    
    .count .check{margin-right:.2rem;display: inline-block;width:.36rem;height:.36rem;border:.03rem solid #666;border-radius: 50%;vertical-align: middle;margin-top: .2rem;}
    
    .count i{position: relative;}
    
    .count .all{vertical-align: middle;margin-top: .2rem;display: inline-block;}
    
    .count .sum{vertical-align: middle;margin-top: .2rem;display: inline-block;}
    
    .count .sum span{color:#fd888b;}
    
    .count button{display: inline-block;width:1.6rem;height:.8rem;border-radius: .08rem;color:white;background:#65c4aa; float: right;margin-right:.64rem;vertical-align: middle;border:none;outline: none;font-size: .26rem;}

    /*删除部分*/
    .hint{top:0; width:100vw;height:100vh;background:rgba(0,0,0,0.5);position: absolute;z-index: 9999;}
    .hint .hint-box{width:4.3rem;height:2.32rem; position:absolute;top:50%;left:50%; transform: translate(-50%,-50%);font-size: .32rem;text-align: center;border-radius: .08rem;background: #fff;}
    .hint .hint-box p{height:49.5%;line-height:1.16rem;}
    .hint .hint-box p:nth-of-type(1){border-bottom: 1px solid #ececec;}
    .hint .hint-box p span:nth-of-type(1){float: left;}
    .hint .hint-box p span{display: inline-block;width:49.5%;}
    .hint .hint-box p:nth-of-type(2) .delete{border-left: 1px solid #ececec;color:#fd888b;}
</style>