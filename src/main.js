import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueI18n from 'vue-i18n'
import { Toast } from 'vant';
import { List } from 'vant';

import 'vant/lib/index.css';


Vue.config.productionTip = false
import '@/style/style.less'
import 'swiper/dist/css/swiper.css'

// import '@/mock'


Vue.use(VueI18n)
Vue.use(Toast);
Vue.use(List);

Vue.prototype.$Toast = Toast;

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
const CHINA = '3'
const lang = parseInt(locationBar.lang || CHINA)
let locale = null
switch (lang) {
  case 1:
    locale = 'in'
    break;
  case 2:
    locale = 'ma'
    break;
  case 3:
    locale = 'zh'
    break;
}
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh': require('@/lang/zh.json'),
    'in': require('@/lang/in.json'),
  }
})

const app = new Vue({
  router,
  store,
  i18n,
  created() {
    locationBar.token && this.$store.commit('saveToken', locationBar.token)
    this.$store.commit('saveLang', lang)
  },
  render: h => h(App)
}).$mount('#app')


Vue.filter('time', function (time) {
  var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
  return date.toJSON().substr(0, 19).replace('T', ' ');
})

Vue.filter('fmoney', function (val) {
  const thousand = app.$t('thousand')
  const minute = app.$t('minute')
  if (val) {
    let symbol = ''
    if (val < 0) {
      symbol = '-'
      val = Math.abs(val)
    }
    let numArr = val.toFixed(2).split('.')
    let num = numArr[0]
    let result = ''
    while (num.length > 3) {
      result = thousand + num.slice(-3) + result
      num = num.slice(0, num.length - 3)
    }
    if (num) {
      result = num + result
    }
    return symbol + result + minute + numArr[1]
  } else {
    return '-'
  }
})
