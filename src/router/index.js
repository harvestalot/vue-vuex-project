import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/components/Echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      children:[
        {
          path: 'echarts',
          name: 'Echarts',
        //   component: resolve => require( ['@/components/Echarts'], resolve)
          component: () => import('@/components/Echarts') 
        },
      ]
    },
  ]
})
