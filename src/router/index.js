import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
          //地址为空时跳转home页面
          {
              path: '',
              redirect: '/home'
          },{
            path: '/home',
            component: Home
        },
      ]
    }
  ]
})
