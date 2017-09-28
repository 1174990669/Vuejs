import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tw from '@/components/tw'
import clic from '@/components/clic'
import th from '@/components/th'
import gn from '@/components/gn'
import ga from '@/components/ga'
import zb from '@/components/zb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/but',
      name: 'tw',
      component: tw
    },
    {
      path: '/onc',
      name: 'clic',
      component: clic
      // checked:{}
    },
    {
      path: '/thn',//������
      name: 'th',
      component: th
      // checked:{}
    },
    {
      path: '/gnn',//������
      name: 'gn',
      component: gn
      // checked:{}
    },
    {
      path: '/gan',//�۰���
      name: 'ga',
      component: ga
      // checked:{}
    },
    {
      path: '/gzb',//�ܱ���
      name: 'zb',
      component: zb
      // checked:{}
    }
  ]
})
