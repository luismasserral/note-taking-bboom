import Vue from 'vue';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'reset-css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.scss';
import axios from './setup/axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.config.productionTip = false;

export default new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app');
