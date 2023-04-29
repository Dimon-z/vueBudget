import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { RoutePaths } from '../enums/PageNameRouter';
import HelloWorldVue from '../views/HelloWorld.vue';

const HelloWorldVue = () => import('../views/HelloWorld.vue');
const LoginView = () => import('../views/Login.vue');
const GraphView = () => import('../views/Graph.vue');
const ListView = () => import('../views/List.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${RoutePaths.HOME}`,
    component: HelloWorldVue,
    children: [
      {
        path: RoutePaths.LOGIN,
        component: LoginView,
      },
      {
        path: RoutePaths.GRAPH,
        component: GraphView,
      },
      {
        path: RoutePaths.LIST,
        component: ListView,
      },
    ],
  },
  {
    path: `/${RoutePaths.LOGIN}`,
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
