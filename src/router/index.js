import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: () => import('../views/Tasks.vue') },
  { path: '/add-task', component: () => import('../views/AddTask.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
