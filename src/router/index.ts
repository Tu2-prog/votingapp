import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
import AboutView from '../views/AboutView.vue'
import VotesView from '../views/VotesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/votes',
    name: 'votes',
    component: VotesView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
