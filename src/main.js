import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
import '@/style/style.less'
import 'swiper/dist/css/swiper.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
