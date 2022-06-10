import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'market',
    meta: { requiresLogin: false },
    component: () => import('@/views/Market/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    meta: { title: 'notFound.name' },
    component: () => import('@/views/NotFound/index.vue'),
  },
]
