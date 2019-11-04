import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import AllShop from '../pages/AllShop.vue';
import Car from '../pages/Car.vue';
import FenLei from '../pages/FenLei.vue';
import ShopInfo from '../pages/ShopInfo.vue';
import Login from '../pages/Mine/Login.vue';
import Mine from '../pages/Mine/Mine.vue';
import ZhuCe from '../pages/Mine/ZhuCe.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/allShop',
      component: AllShop
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/fenlei',
      component: FenLei
    }, {
      path: '/info',
      component: ShopInfo
    },
    {
      path: '/mine',
      component: Mine,
      children: [{
          path: 'login',
          component: Login
        },
        {
          path: 'zhuce',
          component: ZhuCe
        }
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router