<template>
  <div class="hello">
    <hea></hea>
    <div class="div">
      <h3>{{fo.title}}</h3>
      <router-link to='two'><span>更多</span></router-link>
      <div v-show='!fo'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503395569156&di=a9d750e8b37308736af6b733fcfe5774&imgtype=0&src=http%3A%2F%2Fm.gogaonet.com.cn%2Fbook_cover%2Fbd14306798.jpg" alt=""></div>
      <div class="float">
        <ul class="ul">
          <li v-for="item in fo.subjects">
              <router-link v-bind:to="'/fix/'+item.id">
                <img v-bind:src="item.images.large" alt="#"><br/>
              </router-link>
              <strong>{{item.title}}</strong><br/>
              <p>评分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="div">
      <h3>{{too.title}}</h3>
      <router-link to='to'><span>更多</span></router-link>
      <div class="float">
      <div v-show='!too'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503395569156&di=a9d750e8b37308736af6b733fcfe5774&imgtype=0&src=http%3A%2F%2Fm.gogaonet.com.cn%2Fbook_cover%2Fbd14306798.jpg" alt=""></div>
        <ul class="ul">
          <li v-for="item in too.subjects">
            <router-link v-bind:to="'/fix/'+item.id">
              <img v-bind:src="item.images.large" alt="#"><br/>
            </router-link>
            <strong>{{item.title}}</strong>
            <p>评分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="div">
      <h3>{{the.title}}</h3>
      <router-link to='th'><span>更多</span></router-link>
      <div class="float">
        <ul class="ul">
        <div v-show='!the'><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503395569156&di=a9d750e8b37308736af6b733fcfe5774&imgtype=0&src=http%3A%2F%2Fm.gogaonet.com.cn%2Fbook_cover%2Fbd14306798.jpg" alt=""></div>
          <li v-for="item in the.subjects">
            <router-link v-bind:to="'/fix/'+item.id">
              <img :src="item.images.large" alt="#"><br/>
            </router-link>
            <strong>{{item.title}}</strong>
            <p>评分</p>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>

import hea from '../components/he'

export default {
  name: 'hello',
  data () {
    return {
      fo:[],
      too:[],
      the:[]
    }
  },
  created(){
    this.fn(),
    this.two(),
    this.ther()
  },
  methods:{
    fn(){
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(
        function(res){
          // for (var i = 0; i <20; i++) {
            // if () {}
            this.fo=res.data
          // }
        },function(res){
          console.log(404)
        }
      )
    },
    two(){
      this.$http.jsonp(
        'https://api.douban.com/v2/movie/coming_soon').then(
          function(res){
            // for (var i = 0; i < 20; i++) {
              this.too=res.data
            // }
          },function(ree){
            console.log(404)
          }
        )
    },
    ther(){
      this.$http.jsonp(
        'https://api.douban.com/v2/movie/top250').then(
          function(res){
            // for (var i = 0; i < 20; i++) {
               if (res.data.subjects.length>=11) {
                  res.data.subjects.length=10
              // console.log(1)
              }
              this.the=res.data
            // }
          },function(ree){
            console.log(404)
          }
        )
    }
  },
  components:{
    hea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{float:left;font-size: 34px;font-weight:400;padding-left: 20px}
  span{float:right;color:#42bd56;font-size:30px;padding-right: 30px;margin-top:34px;}
  .float{clear:both;}
  .ul{width: 100vw;height:400px;white-space:nowrap;overflow: auto;}
  .float li{display:inline-block;padding-left:20px}
  .float img{width: 180px;height: 250px;}
  .div{margin-top: 30px}
  strong{display:inline-block;width:180px;height:40px;font-size:30px;overflow:hidden}
  p{font-size:26px;}
</style>
