import Vue from 'vue'
import VueRouter from 'vue-router'
import profilefind from '../views/profilefind.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/profilefind',
    name: 'profilefind',
    component: profilefind
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
