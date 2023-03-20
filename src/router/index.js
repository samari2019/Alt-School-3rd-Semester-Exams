import { createRouter, createWebHashHistory } from 'vue-router'
import Counter from "@/components/Counter.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";
const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
