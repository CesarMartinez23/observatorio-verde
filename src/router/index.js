import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/ugb-verde',
      name: 'ugb-verde',
      component: () => import('../views/VerdeView.vue')
    },
  ]
})

export default router
