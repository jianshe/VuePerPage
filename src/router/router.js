import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const good = r => require.ensure([], () => r(require('../page/good/good')), 'good')
const upstage = r => require.ensure([], () => r(require('../page/upstage/upstage')), 'upstage')
const friend = r => require.ensure([], () => r(require('../page/friend/friend')), 'friend')
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/good',
      component: good
    },
    {
      path: '/upstage',
      component: upstage
    },
    {
      path: '/friend',
      component: friend
    }
  ]
}]
