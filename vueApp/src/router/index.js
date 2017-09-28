import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import user from '@/pages/user'
import post from '@/pages/post'
import sea from '@/pages/sea'
import all from '@/pages/all' //我的订单全部页面
import end from '@/pages/end' //我的订单已完成页面
import goods from '@/pages/goods' //我的订单待发货页面
import shippend from '@/pages/shippend' //我的订单已发货页面
import stay from '@/pages/stay' //我的订单待付款页面
import start from '@/pages/start' //启动页面
import den from '@/pages/den'//登录页面
import zhu from '@/pages/zhu'//注册页面

import useron from '@/components/useron'
import spin from '@/pages/spin'
import spincen from '@/components/spincen'
import kitchen from '@/components/kitchen'
import box from '@/components/box'
import decoration from '@/components/decoration'
import recommend from '@/components/recommend'
import Zdet from '@/components/Zdet'
import page from '@/pages/page'//详情页面
import cp from '@/pages/cp'//分享测评赢好礼


import cart from '@/pages/cart'//购物车页面
import cartone from '@/pages/cartone'
import shan from '@/pages/shan'
import order from '@/pages/order'//确定订单
import orderone from '@/pages/orderone'
import orderfour from '@/pages/orderfour'
import orderfive from '@/pages/orderfive'

import sq from '@/pages/sq'//社区页面
import zx from '@/pages/zx'
import jf from '@/pages/jf'
import tj from '@/pages/tj'
import shi from '@/pages/shi'
import she from '@/pages/she'
import na from '@/pages/na'
import ren from '@/pages/ren'//他的主页
import renone from '@/pages/renone'
import rentwo from '@/pages/rentwo'

import Aaa from '@/pages/mea' //我的页面个人中心
import meatwo from '@/pages/meatwo'
import sz from '@/pages/sz' //设置页面

import cartfen from '@/pages/cartfen' //我的积分
import cartfenone from '@/pages/cartfenone'
import cartfentwo from '@/pages/cartfentwo'
import cartthree from '@/pages/cartthree'
import med from '@/pages/med'//我的收藏
import tiding from '@/pages/tiding'//爱购客服
import kf from '@/pages/kf'//客服聊天
import tidingone from '@/pages/tidingone'//我的消息
import bian from '@/pages/bian'//帖子编辑
import tie from '@/pages/tie'//帖子最新
import tieone from '@/pages/tieone'//帖子最新分享

import dan from '@/pages/dan'//丹麦生活
import mer from '@/pages/mer'//丹麦生活
import fa from '@/pages/fa'//丹麦生活

import pa from '@/pages/pa'//家饰详情
import patwo from '@/pages/patwo'//收纳详情
import pathre from '@/pages/pathre'//餐厨详情
import pafou from '@/pages/pafou'//家纺详情

import shione from '@/pages/shione'//家饰详情
import tjone from '@/pages/tjone'//推荐详情
import naone from '@/pages/naone'//收纳详情
import sheone from '@/pages/sheone'//详情
import jfone from '@/pages/jfone'//详情
import zxone from '@/pages/zxone'//最新详情


Vue.use(Router)

export default new Router({
  linkActiveClass:'abc',
  routes: [
     {
      path:'/',
      component:Hello,
      path:'',
      component:start,
     },
     {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/user',
      name: 'user',
      component:user,
      children:[{path:'useron',component:useron}]
    },
    {
      path: '/post',
      name: 'post',
      component:post
    },
    {
      path: '/sea',
      name: 'sea',
      component:sea
    },
    {
      path: '/all',
      name: 'all',
      component:all
    },
    {
      path: '/end',
      name: 'end',
      component:end
    },
    {
      path: '/goods',
      name: 'goods',
      component:goods
    },
    {
      path: '/shippend',
      name: 'shippend',
      component:shippend
    },
    {
      path:'/stay',
      name:'stay',
      component:stay
    },
    {
      path:'/start',//启动页面
      name:'start',
      component:start
    },
    {
      path:'/den',//登录页面
      component:den,
    },
    {
      path:'/zhu',//注册页面
      component:zhu,
    },
    {
      path:'/spin',
      name:'spin',
      component:spin,
      children:[
      {path:'',component:recommend},
      {path:'spincen',component:spincen/*,children:[{path:'page',component:page}]*/},
      {path:'kitchen',component:kitchen},
      {path:'box',component:box},
      {path:'decoration',component:decoration},
      {path:'recommend',component:recommend}
      ]
    },
    {
      path:'/page/:ab',//详情页面
      component:page,
      children:[
      {path:'Zdet',component:Zdet,},
      {path:'cp',component:cp},//分享测评赢好礼
      ]
    },
    {
      path:'/pa/:abcd',
      component:pa
    },
    {
      path:'/patwo/:abcd',
      component:patwo
    },
    {
      path:'/pathre/:abcd',
      component:pathre
    },
    {
      path:'/pafou/:abcd',
      component:pafou
    },
    {
      path:'/cart',
      component:cart,
      children:[
        // {path:'',component:cartone},
        {path:'cartone',component:cartone},
        {path:'shan',component:shan},
      ]
    },
    {
      path:'/sq',  //我的社区页面
      name:'sq',
      component:sq,
      children:[
        {path:'',component:tj,},
        {path:'tj',component:tj,},
        {path:'zx',component:zx,},
        {path:'jf',component:jf,},
        {path:'shi/:abcd',component:shi,},
        {path:'she',component:she,},
        {path:'na',component:na,},
      ]
    },
    {
      path:'/shione/:abcd',component:shione  //家饰页面详情
    },
    {
      path:'/tjone/:abcd',component:tjone
    },
    {
      path:'/naone/:abcd',component:naone
    },
     {
      path:'/sheone/:abcd',component:sheone
    },
     {
      path:'/jfone/:abcd',component:jfone
    },
    {
      path:'/zxone/:abcd',component:zxone
    },
    {
      path:'/me',//我的 (个人中心)页面
      component:Aaa,
      children:[
        {path:'',component:meatwo},
        {path:'meatwo',component:meatwo},
      ]
    },
    {
      path:'/sz',
      component:sz,
    },
    {
      path:'/cartfen',//我的积分
      component:cartfen,
      children:[
      {path:'',component:cartfenone},
      {path:'cartfenone',component:cartfenone},
      {path:'cartfentwo',component:cartfentwo},
      {path:'cartthree',component:cartthree},
      ]
    },
    {
      path:'/med',//我的收藏
      component:med,
    },
    {
      path:'/tiding',//我的消息
      component:tiding,
      children:[{path:'tidingone',component:tidingone}]
    },
    {
      path:'/kf',
      component:kf,
    },
    {
      path:'/order',//确认订单
      component:order,
      children:[
        {path:'orderfour',component:orderfour},
        {path:'orderfive',component:orderfive}
      ]
    },
    {
      path:'/orderone',component:orderone,
    },
    {
      path:'/dan',//丹麦生活
      component:dan,
    },
    {
      path:'/mer',//丹麦生活
      component:mer,
    },
    {
      path:'/fa',//丹麦生活
      component:fa,
    },
    {
      path:'/ren',//他人主页
      component:ren,
      children:[
        {path:'renone',component:renone},
        {path:'rentwo',component:rentwo},
      ]
    },
    {
      path:'/tie',//帖子最新
      component:tie,
      children:[{path:'tieone',component:tieone}]
    },
    {
      path:'/bian',//帖子编辑
      component:bian,
    },

  ]
})
