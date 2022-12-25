import { createRouter, createWebHistory } from 'vue-router'

import StackView from '../views/StackView.vue'
import BinaryTreeView from '../views/BinaryTreeView.vue'
import QueueView from '../views/QueueView.vue'

const routes = [
  {
    path: '/',
    name: 'tree',
    component: BinaryTreeView
  },
  {
    path: '/stack',
    name: 'stack',
    component: StackView
  },
  {
    path: '/queue',
    name: 'queue',
    component: QueueView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
