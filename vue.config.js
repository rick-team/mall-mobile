module.exports = {
  // 修改的配置
  devServer: {
    proxy: {
      '/': {//代理api
          target: "http://149.129.84.7:8080/",//服务器api地址
          changeOrigin: true,//是否跨域
          ws: false, // proxy websockets
          pathRewrite: {//重写路径
              "^/": ''
          }
      }
  }
	}
}