// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//设置反向代理，前端请求默认发送到http:localhost:8443/api
var  axios=require('axios')
//全局注册，之后可在其他组件中通过this.axios发送数据
Vue.prototype.baseUrl='http://localhost:8443/api'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})