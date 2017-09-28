<template>
	 <div class="wrap">
	    <header>
	      <div>
	        <router-link to='/spin/recommend' tag='button' class="goback"><img src="../../static/images/goback.png"></router-link>
	        <p>欧美生活</p>
	      </div>
	    </header>
	    <section>
	      <div class="denmark-div"><img src="../../static/images/p1.png"></div>
	      <div class="denmarklive">
	        <h3>欧美生活29元起</h3>
	        <p>丹麦家居的设计理念是基于现实需求的功能性，流畅的极简线条设计，高纯度的色彩追求，亚麻等环保材质的使用，都体现了丹麦家居对自然，阳光的渴望。爱购精选出口丹麦市场的老牌家居供应商，为你提供颜值和功能兼备的家居品。</p>
	      </div>
	      <ul class="denmark-ul">
	        <li v-for="item in data">
	          <img :src="item.img[2]">
	          <p>{{item.lei}}</p>
	          <span>￥{{item.price}}</span>
	        </li>
	      </ul>
	    </section>
	  </div>
</template>
<script>
export default{
  data(){
    return{
      data:[]
    }
  },
  mounted(){
    this.$http.get('static/json/box.json')
      .then(
        function(res){
          this.data = res.body
          // console.log(this.data)
        },
        function(ree){
          console.log(404)
        }
      )
    
  },
}
</script>
<style scoped>
	    *{
            margin: 0;
            padding: 0;
            font-family: "微软雅黑";
        }
        .wrap{
            width: 7.5rem;
            margin: 0 auto;
            background:#f9f9f9;
            overflow: hidden;
        }
        li{
            list-style: none;
        }
      header{
          position: fixed;
          border-bottom: 1px solid #fbfbfb;
          width: 7.5rem;
          height: 0.95rem;
          z-index: 666;
      }
      header div{
        width: 100%;
        height: 0.95rem;
        margin: 0;
        position: relative;
        background-color: #fff;
      }
      header div button{
          border: none;
          outline-style: none;
          background: transparent;
          width: 0.2rem;
          height:0.35rem;
          position: absolute;
          top: 0.35rem;
          left: 0.3rem;   
      }
      .goback img{
        width: 100%;
        height: 100%;
      }
      header div p{
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 0.95rem;
        font-weight: bold;
        font-size: 0.34rem;
        color: #404040;
        letter-spacing: 5px;
        float: right;
        border-bottom:1px solid #eaeaea;
      }
    section{
      width: 100%;margin-top: 0.95rem;
    }
    .denmark-div{
      width: 100%;height: 3.02rem;
    }
    .denmark-div img{
      width: 100%;height: 100%;
    }
    .denmarklive{
      width: 7.02rem;margin: 0 auto
    }
    .denmarklive h3{
      width: 100%;height: 0.45rem;
      line-height: 0.45rem;font-size: 0.32rem;
      color: #404040;letter-spacing: 1px;
      text-align: center;
    }
    .denmarklive p{
      width: 100%;text-align: left;font-size: 0.28rem;
      color: #6A6A6A;letter-spacing: 0.4px;line-height: 0.41rem;
    }
    .denmark-ul{
      width: 100%;
    }
    .denmark-ul li{
      position: relative;
      width: 3.46rem;
      height: 4.6rem;
      float: left;
      margin-left: 0.2rem;
    }
    .denmark-ul li img{
      width: 100%;height: 3.42rem;
    }
    .denmark-ul li p{
      width: 100%;height: 0.4rem;
      font-size: 0.24rem;color: #404040;letter-spacing: 0.17px;
      text-align: center;
    }
    .denmark-ul li span{
      display: inline-block;width: 100%;height: 0.4rem;position: absolute;
      top: 4.04rem;
      text-align: center;font-size: 0.26rem;color: #FD888B;letter-spacing: 0.19px;
    }
</style>