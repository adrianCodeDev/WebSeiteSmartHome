import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Settings from "../views/Settings/Settings.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
