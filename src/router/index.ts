import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:quest?',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/quiz-end',
      name: 'quiz-end',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizEnd.vue')
    }
  ]
})

export default router
