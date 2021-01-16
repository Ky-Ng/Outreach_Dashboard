import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import NavBar from '../components/NavBar'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/home',
    name: 'NavBar',
    component: NavBar,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
