import axios from 'axios'
import store from '@/store/store'
import baseURL from './baseURL'
import { Toast } from 'vant';


const server = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截 如果有token存在则给请求头添加token
server.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = 'Bearer ' + store.state.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// // 响应拦截器 返回data内容
server.interceptors.response.use((res) => {
  console.log(res)
  return res.data
}, error => {
  Toast("服务端异常")
  return Promise.reject(error)
})

// server.all = (...param) => {
//   return axios.all(param)
// }

export default server
