import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';

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
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// export default router;