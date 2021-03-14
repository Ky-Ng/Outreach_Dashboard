import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../views/AuthPage'
import Home from '../views/Home.vue'
import {myProjectAuth} from "@/backend/data_base";
import Error from '@/views/Error'
import Test from '@/views/Test'
import {capitalize} from "@/assets/formatting";


Vue.use(VueRouter)



const requireAuth = (to, from, next) => {
  let user = myProjectAuth.currentUser
  if (!user){
    next({name: 'login'})
  }else{
    next()
  }
}

const authRedirect = (link) => {
  let user = myProjectAuth.currentUser
  if (!user){
    next({name: 'login'})
  }else{
    return link
  }
}

const routes = [
  {
    path: '/',
    name: 'login',
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
    path: '*',
    name: 'Error',
    component: Error,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
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

router.beforeEach((to, from, next) =>{
  document.title = "Serendipity STEM - " + capitalize(to.name)
  next()
})

export default router
