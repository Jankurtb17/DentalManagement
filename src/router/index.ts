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
      },
      meta: {
        login: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        SignIn: () => import("../views/SignIn.vue")
      },
      meta: {
        login: true,
      }
    },
    {
      path: '/register',
      name: 'signup',
      components: {
        SignIn: () => import("../views/SignUp.vue")
      },
      meta: {
        login: true,
      }
    },
    {
      path: '/sign-up',
      name: 'signup-lg',
      components: {
        SignIn: () => import("../views/devices/LgRegister.vue")
      },
      meta: {
        login: true,
      }
    },
    {
      path: '/dashboard',
      name: "dashboard",
      meta: {
        requiresAuth: true,
        login: false
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../views/AppDashboard.vue")
      }
    },
    {
      path: '/settings',
      name: "settings",
      meta: {
        requiresAuth: true
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../views/AppDashboard.vue")
      }
    },
    {
      path: '/calendar',
      name: "calendar",
      meta: {
        requiresAuth: true
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../views/AppCalendar.vue")
      }
    },
    {
      path: '/patient-list',
      name: "patient-list",
      meta: {
        requiresAuth: true,
        hasTwoHeader: true
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../views/PatientList.vue")
      }
    },
    {
      path: '/patient-list/:patient_id',
      name: "patient-info",
      meta: {
        requiresAuth: true,
        hasTwoHeader: true
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../components/PatientInfo.vue")
      },
      props: true
    },
    {
      path: '/payment',
      name: "payment",
      meta: {
        requiresAuth: true
      },
      components: {
        SideMenu: () => import("../components/SideMenu.vue"),
        MainContent: () => import("../views/PaymentDashboard.vue")
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const data = JSON.parse(sessionStorage.getItem("creds") as any)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!data) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router
