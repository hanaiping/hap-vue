import Vue from 'vue'
// import Router from 'vue-router'
// import Appindex from '@/components/home/Appindex'
// import Login from '@/components/Login'
import Vuex from 'vuex'

// Vue.use(Router)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})

/* export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Appindex',
      component: Appindex
    }
  ]
}) */
