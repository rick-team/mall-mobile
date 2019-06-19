import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
import '@/style/style.less'
import 'swiper/dist/css/swiper.css'

// import '@/mock'


Vue.use(VueI18n)

function getRequest(url) {
  const requestData = {};
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      requestData[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return requestData;
}

const locationBar = getRequest(location.search)
const CHINA = '1'
const lang = parseInt(locationBar.lang || CHINA)
let locale = null
switch (lang) {
  case 1:
    locale = 'zh'
    break;
  case 2:
    locale = 'ma'
    break;
  case 3:
    locale = 'in'
    break;
}
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh': require('@/lang/zh.json'),
  }
})

Vue.filter('time', function (time) {
  var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
  return date.toJSON().substr(0, 19).replace('T', ' ');
})

new Vue({
  router,
  store,
  i18n,
  created() {
    locationBar.token && this.$store.commit('saveToken', locationBar.token)
    this.$store.commit('saveLang', lang)
  },
  render: h => h(App)
}).$mount('#app')