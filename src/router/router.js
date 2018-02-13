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
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/children/detail')), 'balanceDetail')

const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')

const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/children/detail')), 'pointsDetail')

const test = r => require.ensure([], () => r(require('../page/test/pushDatas')), 'test')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service//children/questionDetail')), 'questionDetail')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')

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
      path: '/test',
      component: test
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
          component: info
        },
        {
          path: 'setusername',
          component: setusername,
        }
      ]
    },
    //余额
    {
      path: 'balance',
      component: balance,
      children: [{
        path: 'detail', //余额说明
        component: balanceDetail,
      }]
    }, //我的优惠页
    {
      path: 'benefit',
      component: benefit,
      children: [{
        path: 'coupon', //代金券说明
        component: coupon,
      }, {
        path: 'hbDescription', //红包说明
        component: hbDescription,
      }, {
        path: 'hbHistory', //历史红包
        component: hbHistory,
      }, {
        path: 'exchange', //兑换红包
        component: exchange,
      }, {
        path: 'commend', //推荐有奖
        component: commend,
      }, ]
    },
    //我的积分页
    {
      path: 'points',
      component: points,
      children: [{
        path: 'detail', //积分说明
        component: pointsDetail,
      }]
    },
    //服务中心
    {
      path: '/service',
      component: service,
      children: [{
        path: 'questionDetail', //订单详情页
        component: questionDetail,
      }, ]
    },
    //我的下载页
    {
      path: '/download',
      component: download
    }
  ]
}]
