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
      path: '/iniciativas',
      name: 'iniciativas-medioambientales',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/ugb-verde',
      name: 'ugb-verde',
      component: () => import('../views/VerdeView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactVIew.vue')
    },
    {
      path: '/directorio',
      name: 'directorio',
      component: () => import('../views/DirectoryView.vue')
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
