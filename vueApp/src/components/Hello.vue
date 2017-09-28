<template>
  <div class="hello">
    <header>
          <hea></hea>
    </header>
    <div class="Single" style="margin-top:0.7rem">
      <ul>
        <li>
          <router-link to='all'>
            <img src="../../static/images/b.jpg" alt="">
          </router-link>
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
        <li>
          <img src="../../static/images/b2.jpg" alt="">
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
        <li>
          <img src="../../static/images/b3.jpg" alt="">
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
        <li>
          <img src="../../static/images/b4.jpg" alt="">
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
        <li>
          <img src="../../static/images/b5.jpg" alt="">
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
        <li>
          <img src="../../static/images/b6.jpg" alt="">
          <p>Sower 意点陶瓷马克杯系列<br/><br/><span>￥119</span></p>
        </li>
      </ul>
    </div>
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
    .Single ul{background:#f9f9f9;padding-top:.20rem}
    .Single li{display: inline-block;width: 3.20rem;height:4.64rem;text-align:center;margin-left: 0.2rem}
    .Single img{width: 3.45rem;height: 3.45rem;}
    .Single p{font-size:.26rem;color:#404040;height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .Single span{color:#FD888B;font-size:.3rem;line-height:.28rem}
    /*.abc{color:gray;}*/
</style>
