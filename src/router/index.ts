import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './modules-index';
import createRouterGuard from './guard';
import { useAppState } from '@/store';

const appState = useAppState();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginView.vue'),
      meta: {
        // router other information
      },
    },
    ...appRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'noFound',
      component: () => import('@/views/exception/404.vue'),
      meta: {
        title: '404',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouterGuard(router);

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    if (appState.userId) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
