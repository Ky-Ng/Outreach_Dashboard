import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../views/AuthPage'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import {myProjectAuth} from "@/backend/backend";
import CurriculumMain from "@/components/curriculum/CurriculumContent";

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  let user = myProjectAuth.currentUser
  if (!user){
    next({name: 'AuthPage'})
  }else{
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/test',
    name: 'CurriculumMain',
    component: CurriculumMain
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/about',
    name: 'About',
    component: About,
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
