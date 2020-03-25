import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Hi1 from '@/views/case-query/Hi1.vue'

export const constantRouterMap =[
  {
    path: '/',
    name: 'Hi1',
    component:()=>import('@/views/case-query/Hi1')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

