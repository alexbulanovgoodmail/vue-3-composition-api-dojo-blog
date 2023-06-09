import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import CreateView from '../views/CreateView.vue'
import TagView from '../views/TagView.vue'
import RealTime from '../views/RealTime.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'DetailsView',
      component: DetailsView,
      props: true
    },
    {
      path: '/create',
      name: 'CreateView',
      component: CreateView
    },
    {
      path: '/tag/:slug',
      name: 'TagView',
      component: TagView
    },
    {
      path: '/realtime',
      name: 'RealTime',
      component: RealTime
    }
  ]
})

export default router
