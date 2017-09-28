import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import two from '@/components/two'
import he from '@/components/he'
import to from '@/components/to'
import th from '@/components/th'
import fix from '@/components/fix'
import sou from '@/components/sou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/he',
      name: 'he',
      component: he
    },
    {
      path: '/to', 
      name: 'to',
      component: to
    },
    {
      path: '/th',
      name: 'th',
      component: th
    },
    {
      path:'/fix/:abcd',
      name:'fix',
      component:fix
    },
    {
      path:'/sou',
      name:'sou',
      component:sou
    },
  ]
})
