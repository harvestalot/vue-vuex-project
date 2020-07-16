import Vue from 'vue'
import Router from 'vue-router'
import user_router from './user'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path:"/login" ,
       name:"Login",
       component: () => import("@/views/login")
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views'),
      redirect: "/login",
      children:[
        {
           path:"home",
           name:"Home",
           component: () => import("@/views/home")
        },
      ]
    },
    {
        path:"*",
        name:"Error",
        component:Error,
    },
    ...user_router,
  ]
})
