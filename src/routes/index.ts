import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';
import Dashboard from '@/views/auth/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// export default router;