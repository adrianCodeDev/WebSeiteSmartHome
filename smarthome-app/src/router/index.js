import { createRouter, createWebHistory } from "vue-router";

// Importiere die Seiten
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
/*
    Funktionsweise von router-view
    router-view ist ein Platzhalter:
    Es ist ein spezielles Vue-Komponentelement, das den Inhalt der aktuellen Route anzeigt.

    Wenn die Route z. B. / ist, zeigt router-view den Inhalt der Dashboard-Komponente.
    Wenn die Route /settings ist, zeigt es den Inhalt der Settings-Komponente.
    Wie das in App.vue zusammenkommt:
    In App.vue wird nur <router-view /> eingebunden, aber der Router füllt diesen Platzhalter automatisch mit der passenden Komponente basierend auf der URL.

    Woher weiß der Router, welche Komponente angezeigt wird? Das wird in src/router/index.js festgelegt. Jede Route (path) ist mit einer Komponente (component) verbunden
*/

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
