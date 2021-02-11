import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../views/AuthPage'
import Home from '../views/Home.vue'
import {myProjectAuth} from "@/backend/backend";
import Test from '@/views/Test'


Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  let user = myProjectAuth.currentUser
  if (!user){
    next({name: 'AuthPage'})
  }else{
    next()
  }
}

const authRedirect = (link) => {
  let user = myProjectAuth.currentUser
  if (!user){
    next({name: 'AuthPage'})
  }else{
    return link
  }
}

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: Test,
  // },
  {
    path: '/zoom',
    beforeEnter() {location.href = authRedirect("https://zoom.us/j/91639654519?pwd=QW1CWjBuYVlyVytXS0lDVWdPSXduZz09")}
  },
  {
    path: '/berbawy',
    beforeEnter() {location.href = "https://berbawy.com"}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/about',
    beforeEnter() {location.href = 'https://serendipitystem.org'}
    // redirect: window.location.href("https://google.com")
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
