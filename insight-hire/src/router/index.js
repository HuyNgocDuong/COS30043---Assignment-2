import { createRouter, createWebHashHistory } from 'vue-router'
import JobOverview from '../components/JobOverview.vue'
import JobDetail from '../components/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: JobOverview
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
