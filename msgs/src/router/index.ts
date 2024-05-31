import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import AuthView from "@/views/AuthView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/auth", component: AuthView },
  { path: "/test", component: TestView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
