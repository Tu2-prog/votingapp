import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/dashboard",
    name: 'dashboard',
    component: DashBoard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
