import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../views/ChatsView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      props: true,
      component: () => import('../views/ChatView.vue')
    }
    
  ]
})


export default router
