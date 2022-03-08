module.exports = {
  devServer: {
    proxy: {
      '/upload': {
        target: 'https://jsonplaceholder.typicode.com/posts/',
        changeOrigin: true, //虚拟的站点需要更管origin
        ws: true, // 代理websockets
        secure: true, // 如果是https接口，需要配置这个参数
        pathRewrite: {
        // 顾名思义，将/api重写为 / 此时url变为 http://192.168.101.110:8888/ 而不是 http://192.168.101.110:8888/api
        '^/upload': ''
        }
      }
    }
  },
  lintOnSave: false
}
