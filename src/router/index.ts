import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        SignIn: () => import("../views/HomeView.vue")
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        SignIn: () => import("../views/SignIn.vue")
      }
    },
    {
      path: '/register',
      name: 'signup',
      components: {
        SignIn: () => import("../views/SignUp.vue")
      }
    },
    {
      path: '/sign-up',
      name: 'signup-lg',
      components: {
        SignIn: () => import("../views/devices/LgRegister.vue")
      }
    },
    {
      path: '/dashboard',
      name: "dashboard",
      components: {
        MainContent: () => import("../views/AppDashboard.vue")
      }
    }
  ]
})

export default router
