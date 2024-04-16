import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countdown',
      component: HomeView
    },
    {
      path: '/quiz/:quest?',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/fantasy-quiz/:quest?',
      name: 'fantasy-quiz',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FantasyQuiz.vue')
    },
    {
      path: '/final-riddle/:quest?',
      name: 'final-riddle',
      // route level code-splitting
      // this generates a separate chunk (Quiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FinalRiddle.vue')
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
