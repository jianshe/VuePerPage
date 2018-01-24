import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
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
    //当前选择城市页
    {
      path: '/city/:cityid',
      component: city
    },
    //登录注册页
    {
      path: '/login',
      component: login
    },
    {
      path: '/msite',
      component: msite,
      meta: {
        keepAlive: true
      },
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
