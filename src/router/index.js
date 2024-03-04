import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/CarView',
      name: 'CarView',
      component: () => import('../views/CarView.vue')
    },
    {
      path: '/formView',
      name: 'formView',
      component: () => import('../views/formView.vue')
    },
    {
      path: '/finishView',
      name: 'finishView',
      component: () => import('../views/finishView.vue')
    }
    
  ]
})

export default router
