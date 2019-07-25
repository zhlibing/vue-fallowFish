import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Category from '@/pages/Category'
import Near from '@/components/near/Near'
import MoreNear from '@/components/near/MoreNear'
import New from '@/components/new/New'
import Details from '@/components/Details/Details'
import Chat from '@/components/Details/Chat'
import Addr from '@/components/Details/Addr'
import Pay from '@/components/Details/Pay'
import Fabu from '@/components/Fabu/Fabu'
import Order from '@/components/Order/Order'
import Price from '@/components/Price/Price'
import Auction from '@/components/Auction/Auction'
import Index from '@/pages/Index'
import Yutang from '@/pages/Yutang'
import Message from '@/pages/Message'
import My from '@/pages/My'
import Sell from '@/pages/Sell'
import Login from '@/pages/Login'
import Regist from '@/pages/Regist'
import MovieDetail from '@/components/Details/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/new',
      component: Index,
      children: [
        {
          path: 'new',
          component: New,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'near',
          component: Near,
          meta: {
            keepAlive: false
          }
        }
      ]
    },
    {
      path: '/morenear',
      component: MoreNear
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/yutang',
      component: Yutang,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/my',
      component: My,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/addr',
      component: Addr
    },
    {
      path: '/fabu',
      component: Fabu
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/moviedetail',
      component: MovieDetail
    },
    {
      path: '/sell',
      redirect: '/sell/price',
      component: Sell,
      children: [
        {
          path: 'price',
          component: Price
        },
        {
          path: 'auction',
          component: Auction
        }
      ]
    }

  ]
})
