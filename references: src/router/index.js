import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home'
import ProjectDetail from "../components/ProjectDetail"
import { projectAuth } from '../firebase/config'

// auth guard

//to is where we're going, from is where we're at, next is a func action 
const requireAuthRouteGuard = (to, from, next) =>{
  let user = projectAuth.currentUser //this will automatically update
  if (!user){
    next({ name: 'Welcome' })
  }else{
    next() //carrying on to the "next" route
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuthRouteGuard //just calls the requireAuthRouteGuard
  },
  {
    path: '/test',
    name: 'ProjectDetail',
    component: ProjectDetail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
