import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView.vue'
import PublisherView from '@/views/PublisherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      meta: { transition: 'fade-faster' }
    },
    {
      path: '/:publisherName',
      name: 'publisher',
      component: PublisherView,
      meta: { transition: 'fade-slow' }
    }
  ]
})

export default router
