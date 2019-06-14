import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
import './assets/css/reset.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
