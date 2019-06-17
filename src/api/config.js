import axios from 'axios'
import store from '@/store/store'

// const baseURL = 'http://149.129.84.7/'

const server = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// // 请求拦截 如果有token存在则给请求头添加token
// server.interceptors.request.use(config => {
//   if (store.state.token) {
//     config.headers.token = store.state.token
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// // 响应拦截器 返回data内容
server.interceptors.response.use(({data}) => {
  return data
}, error => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       store.commit('LOGOUT')
  //       router.replace({
  //         path: '/login',
  //         query: {redirect: router.currentRoute.fullPath}
  //       })
  //   }
  // }
  return Promise.reject(error)
})

// server.all = (...param) => {
//   return axios.all(param)
// }

export default server
