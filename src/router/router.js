import { createRouter, createWebHashHistory } from 'vue-router'

import SearchPage from '../pages/SearchPage.vue'
import TrendsPage from '../pages/TrendsPage.vue'


const routes = [
  { name: 'search', path: '/search', component: SearchPage },
  { name: 'trends', path: '/', component: TrendsPage },
]


export const router = createRouter({
  history: createWebHashHistory(),
  routes
})


