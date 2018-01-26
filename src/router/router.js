import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const good = r => require.ensure([], () => r(require('../page/good/good')), 'good')
const upstage = r => require.ensure([], () => r(require('../page/upstage/upstage')), 'upstage')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/setusername')), 'setusername')
const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
// const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
// const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
// const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
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
    //忘记密码页
    {
      path: '/forget',
      component: forget
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
      path:'/test',
      component:test
    },
    {
      path: '/upstage',
      component: upstage
    },
    //个人信息页
    {
      path: '/profile',
      component: profile,
      children: [{
          path: 'info', //个人信息详情页
          component: info,
          // children: [{
          //   path: 'address',
          //   component: address, //编辑地址
          //   children: [{
          //     path: 'add',
          //     component: add,
          //     children: [{
          //       path: 'addDetail',
          //       component: addDetail
          //     }]
          //   }]
          // }]
        },
        {
          path: 'setusername',
          component: setusername,
        },
        // {
        //   path: 'service', //服务中心
        //   component: service,
        // },
      ]
    }
  ]
}]
