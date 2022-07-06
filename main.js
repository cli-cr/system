import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './theme/var.scss'

import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入
import axios from 'axios'
axios.defaults.baseURL = 'https://www.fastmock.site/mock/39501840eb0d208337d6ffb9dba5c0fd/management/'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
