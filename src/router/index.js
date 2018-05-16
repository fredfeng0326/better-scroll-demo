import Vue from 'vue'
import Router from 'vue-router'
import Horizontal from 'components/horizontal'
import vertical from 'components/vertical'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/horizontal'
    },
    {
      path: '/horizontal',
      component: Horizontal
    },
    {
      path: '/vertical',
      component: vertical
    }
  ]
})
