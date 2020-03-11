import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/kevin',
    name: 'Kevin',
    component: () => import(/* webpackChunkName: "kevin" */ '../views/Kevin.vue'),
    children: [
      {
        path: 'a',
        name: 'A',
        component: () => import('../views/A.vue')
      },
      {
        path: 'b',
        name: 'B',
        component: () => import('../views/B.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
