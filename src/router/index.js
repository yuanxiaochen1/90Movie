import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Cards from '../pages/Cards.vue';
import FenLei from '../pages/FenLei.vue';
import Info from '../pages/Info.vue';
import Login from '../pages/Login.vue';
import ZhuCe from '../pages/ZhuCe.vue';
import Mine from '../pages/Mine/Mine';
import ChangePassword from '../pages/Mine/ChangePassword';
import MyLoveCards from '../pages/Mine/MyLoveCards';
import MyLoveMovies from '../pages/Mine/MyLoveMovies';
import Cinema from '../pages/Cinema/Cinema.vue';
import Dai from '../pages/Cinema/Dai.vue';
import Re from '../pages/Cinema/Re.vue';
import Movies from '../pages/MyMovies/Movies.vue';
import MyMovies from '../pages/MyMovies/MyMovies.vue';
import SeeDown from '../pages/MyMovies/SeeDown.vue';
import WantSee from '../pages/MyMovies/WantSee.vue';
import LieBiao from '../pages/LieBiao.vue';
import SouSuo from '../pages/SouSuo.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
      path: '/',
      component: Login
    },{
      path: '/zhuce',
      component: ZhuCe
    },{
      path: '/sousuo',
      component: SouSuo
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cards',
      component: Cards
    }, {
      path: '/fenlei',
      component: FenLei
    },
    {
      path: '/liebiao',
      component: LieBiao
    }, {
      path: '/info',
      component: Info
    },{
      path: '/password',
      component: ChangePassword
    },
    {
      path: '/mine',
      component: Mine,
    }, {
      path: '/loveCards',
      component: MyLoveCards
    },
    {
      path: '/loveMovies',
      component: MyLoveMovies
    },{
      path: '/yingyuan',
      component: Cinema,
      children: [{
        path: '/',
        component: Re
      },{
          path: 're',
          component: Re
        },
        {
          path: 'dai',
          component: Dai
        }
      ]
    },{
      path: '/myMovies',
      component: MyMovies,
      children: [{
        path: '/',
        component: Movies
      },{
          path: 'movies',
          component: Movies
        },
        {
          path: 'xiangSee',
          component: WantSee
        },{
          path: 'yiSee',
          component: SeeDown
        }
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router