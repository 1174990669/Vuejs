// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hea from './components/search-head'
import hd from './components/order-head'
import sp from './components/sp'
import spinFixed from './components/spinFixed'
import swipe from './components/swipe'
import detaSwipe from './components/detaSwipe'
import Zdet from './components/Zdet'
import Zsqhead from './components/Zsqhead'
import Zfen from './components/Zfen'
import tieswiper from './components/tieswiper'


Vue.config.productionTip = false
// swiper
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
