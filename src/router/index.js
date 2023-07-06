import { createRouter, createWebHistory } from "vue-router";
import Home from "../myweb/Home.vue"
import Login from "../myweb/Login.vue"
import Introduce from "../myweb/Introduce.vue"
import Realize from "../myweb/Realize.vue"
import Register from "../myweb/Register.vue"
import Homepage from '../views/Homepage.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import test from '../components/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/introduce",
      name: "Introduce",
      component: Introduce,
    },
    {
      path: "/Realize",
      name: "Realize",
      component: Realize,
    },
    {
      path: "/Register",
      name: "Register",
      component: Register,
    },
    {
      path: "/platform",
      redirect: "/platform/home",
      name: "platform",
      component: Main,
      children: [
        { path: "home", component: Homepage },
        { path: "user", component: User },
        { path: "mall", component: Mall },
        { path: "page1", component: PageOne },
        { path: "page2", component: PageTwo },
      ],
      meta: { requiresAuth: false }, // 添加需要登录的信息
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;