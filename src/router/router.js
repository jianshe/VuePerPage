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

const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const balance = r => require.ensure([],()=>r(require('../page/balance/balance.vue')),'balance')
const detail = r =>require.ensure([],()=>r(require('../page/balance/children/detail.vue')),'detail')
const benefit = r =>require.ensure([],()=>r(require('../page/benefit/benefit.vue')),'benefit')
const hbDescription = r =>require.ensure([],()=>r(require('../page/benefit/children/hbDescription.vue')),'hbDescription')
const commend = r =>require.ensure([],()=>r(require('../page/benefit/children/commend.vue')),'commend')
const hbHistory = r=>require.ensure([],()=>r(require('../page/benefit/children/hbHistory.vue')),'hbHistory')
const coupon = r=>require.ensure([],()=>r(require('../page/benefit/children/coupon.vue')),'coupon')
const exchange = r=>require.ensure([],()=>r(require('../page/benefit/children/exchange.vue')),'exchange')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const points = r=>require.ensure([],()=>r(require('../page/points/points.vue')),'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/children/detail')), 'pointsDetail')

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
<<<<<<< HEAD
    //个人信息余额页
    {
      path:'/balance',
      component:balance,
      children:[{
        path:'detail',
        component:detail
      }]
    }, //个人信息优惠页
    {
      path:'/benefit',
      component:benefit,
      children:[{
        path:'commend',
        component:commend
      },{
        path:'hbDescription',
        component:hbDescription
      },{
        path:'hbHistory',
        component:hbHistory
      },{
        path:'coupon',
        component:coupon
      },{
        path:'exchange',
        component:exchange
      }
    ]
    },
    //下载页面
    {
      path:'/download',
      component:download
    },{
      path:'/points',
      component:points,
      children:[{
        path:'detail',
        component:pointsDetail
      }]
=======
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
      }, ]
>>>>>>> 2675a0b64f5c988d75e7900f807b87ab27c37e3a
    }
  ]
}]
