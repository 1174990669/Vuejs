<template>
  <div class="box">
        <div class="nav" style="background: url(./static/images/minetop.jpg)no-repeat;">
            <router-link to='/sz'>
              <img src="../../static/img/1.png" class="system_options">
            </router-link>
            <p>我的</p>
            <li><img src="../../static/img/qq.jpg"> <span></span></li>
            <p>西瓜西瓜</p>
            <p>
                <span class="care">20&nbsp;</span>
                <span>关注</span> 
                <span class="border">|</span>
                <span class="fengsi_num">35&nbsp;</span>
                <span>粉丝</span>
            </p>
            <p>爱生活，&nbsp;&nbsp;爱自己</p>
        </div>
        <div class="contin">
              <p>
                  <span>我的订单</span>
                  <router-link to='/all' tag='span'>查看全部订单
                    <img src="../../static/img/next.png" class="span-img">
                  </router-link>
              </p>
              <ul class="continshop">
                    <router-link to="../../stay" tag='li'>
                      <img src="../../static/images/payment.png" >
                      <p>待付款</p>
                    </router-link>

                     <router-link to='/goods' tag='li'>
                      <img src="../../static/images/send.png" >
                      <p>待发货</p>
                    </router-link>

                    <router-link to='/shippend' tag='li'>
                      <img src="../../static/images/shipped.png" >
                      <p>已发货</p>
                    </router-link>

                    <router-link to='/end' tag='li' class="finish">
                      <img src="../../static/images/carryOut.png">
                      <p>已完成</p>
                    </router-link>
              </ul>
              <li class="contin_sh">
                  <img src="../../static/img/AfterSale.png">
                  <span>退货/售后</span>
                    <img src="../../static/images/jtt.png">
              </li>
              <router-link to='/tiding/tidingone' tag='li' class="contin_sh  kefu">
                  <img src="../../static/img/custom.png">
                  <span>爱购客服</span>
                    <img src="../../static/images/jtt.png">
              </router-link>
              <router-link to='/cartfen/cartfenone' tag='li' class="contin_sh">
                  <img src="../../static/img/coin.png">
                  <span>我的积分</span>
                    <img src="../../static/images/jtt.png">
              </router-link>
              <li class="contin_sh">
                  <img src="../../static/img/coupon.png">
                  <span>我的优惠券</span>
                    <img src="../../static/images/jtt.png">
              </li>
              <li class="contin_sh  sh">
                  <img src="../../static/img/share (2).png">
                  <span>分享赢优惠券</span>
                  <div class="sale">立减30元</div>
                  <img src="../../static/images/jtt.png">
              </li>
               <router-link to='/med' tag='li' class="contin_sh  contin_sc">
                  <img src="../../static/img/recommend_share_comment2.png">
                  <span>我的收藏</span>
                    <img src="../../static/images/jtt.png">
              </router-link>
              <router-link to='/tie' tag='li' class="contin_sh">
                  <img src="../../static/img/Posting.png">
                  <span>我的发帖</span>
                    <img src="../../static/images/jtt.png">
              </router-link>
        </div>
       <!-- <spinFixed></spinFixed> -->
  </div>
</template>
<script>
// import spinFixed from '../components/spinFixed'
export default {
  data () {
    return {
      
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{font-family:微软雅黑;height: 16rem;}
    .nav{width:100%;height:4.24rem;text-align: center;position: relative;overflow: hidden;background-size:cover;}
    .system_options{
      position:absolute;top:0.22rem;left:0.33rem;width:0.45rem;height:0.4rem;
    }

    .nav>li{
      width:1.5rem;height:1.5rem;margin: 0 auto;margin-top: 0.15rem;border-radius:50%;border: 0.03rem solid transparent;border-left:0.03rem solid #65c4aa;border-right:0.03rem solid #65c4aa;border-bottom:0.03rem solid #65c4aa;transform:rotate(-45deg);
    }
     .nav>li img{
      width:1.5rem;height:1.5rem;border-radius: 50%;transform:rotate(45deg)
     }

    .nav>p:nth-of-type(1){font-size:0.35rem;color:#ffffff;margin-top:0.15rem;}
    .nav>p:nth-of-type(2){font-size: 0.32rem;color:white;letter-spacing:0.04rem;}
    .nav>p:nth-of-type(3){ margin-top:-0.65rem;}
    .nav>p:nth-of-type(4){font-size:0.3rem;color:white;opacity: 0.8;}
    
     .nav span{display: inline-block;margin-left:-.3rem;font-size: 0.23rem;}
     .nav p span{opacity: 0.8;color: white;}
     .nav .care{color:#6ab3a1}
    .nav .fengsi_num{color:#fd888b;}
     .border{padding-left:0.15rem;padding-right:0.15rem;}
      .contin {width: 100%;margin: 0 auto;}
      .contin>p{width:6.82rem;font-size:0.28rem;height:0.7rem;line-height: 0.7rem;position:relative;margin:0 auto;
      }
       .contin p>span:nth-of-type(1){position: absolute;color:black;left:0;}
       .contin p>span:nth-of-type(2){right:0.32rem;position: absolute;color: #989898;}
       .contin p .span-img{position: absolute;width:0.18rem;height: 0.31rem;right:-.4rem;top:0.18rem;}
       .continshop{height:1.4rem;border-bottom: 2px solid #ececec;margin:0 auto;padding-left: .4rem;}
       .continshop>li{
         float: left;width:0.78rem;margin-top:-0.3rem;padding-left:0.43rem;padding-right:0.43rem; height:0.83rem;text-align: center;
         }
         .continshop>li>img{width:0.64rem;height:0.64rem;margin:0 auto;}
          .continshop>li>p{font-size:0.28rem;text-align:left;margin-top:-.2rem;width: 1rem;}
      
      .contin_sh{width:100%;height:0.94rem;border-bottom:1px solid #ececec;position:relative;}
      .contin_sh img:nth-of-type(1){
        position:absolute;left:0.32rem;top:0.32rem;width:0.37rem;height: 0.37rem;
      }
       .contin_sh img:nth-of-type(2){
        position:absolute;right:0.32rem;top:0.35rem;width:0.2rem ;height:0.3rem;
      }
      .contin_sh span{
        position:absolute;top:0.33rem;font-size:0.28rem;letter-spacing:0.03rem;left:0.89rem;color:#404040;
          
      }
      .contin_sc{
        padding-bottom:.05rem;
      }

     .sale{
        color:#fe9093; right:0.61rem;position: absolute;font-size: 0.23rem;top:0.32rem;
      }   

        
       
        
        

</style>