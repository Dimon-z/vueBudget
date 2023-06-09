import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { RoutePaths } from '../enums/PageNameRouter';
import inputForm2Vue from '../pages/inputForm2.vue';


const HelloWorldVue = () => import('../pages/HelloWorld.vue');
const LoginView = () => import('../pages/Login.vue');
const GraphView = () => import('../pages/Graph.vue');
const ListView = () => import('../pages/List.vue');

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
      {
        path: RoutePaths.FORM,
        component: inputForm2Vue,
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
/* 
router.beforeEach((to, from, next) => {

  if(to.name == 'callback') { // check if "to"-route is "callback" and allow access

    next()

  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access

    next()

  } else { // trigger auth0 login

    router.auth.login()

  }

}) */

export default router;
