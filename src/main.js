import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
<<<<<<< HEAD
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/reset.min.css';
=======
import './assets/reset.min.css';
import Vant from 'vant';
import 'vant/lib/index.css';

>>>>>>> 545460f6b810cffb0ad8b6da3a899c11757abef7
Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
