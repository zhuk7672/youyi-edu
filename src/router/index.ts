import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登录界面'
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '主页'
      },
      children: [
        // 子路由（内容区通过 router-view 渲染）
        {
          path: '/changepwd',
          name: 'ChangePwd',
          component: () => import('@/views/ChangePwd.vue')
        },
        {
          path: '/home',
          name: 'HomePage',
          component: () => import('@/views/HomePage.vue')
        },
        {
          path: '/teachers',
          name: 'TeacherIntroduce',
          component: () => import('@/views/TeacherIntroduce.vue')
        },
        {
          path: '/mycourses',
          name: 'MyCourses',
          component: () => import('@/views/MyCourses.vue')
        },
        {
          path: '/reservationpage',
          name: 'ReservationPage',
          component: () => import('@/views/ReservationPage.vue')
        },
        {
          path: '/coursedetails',
          name: 'CourseDetails',
          component: () => import('@/views/CourseDetails.vue')
        },
        {
          path: '/setup',
          name: 'SetUp',
          component: () => import('@/views/SetUp.vue')
        },
       
      ]
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/login",
    },
  ],
});
router.beforeEach((to, from, next) => {
  // 在路由变化之前，设置滚动位置为顶部
  // if (import.meta.env.SSR !== true) {
  //   window.scrollTo(0, 0);
  // }
  scrollTo(0, 0);
  next();
});
export default router;
