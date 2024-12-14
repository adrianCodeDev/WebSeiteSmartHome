<template>
  <div id="app">
    <!-- Navbar wird nur angezeigt, wenn wir NICHT auf der Login-Seite sind -->
    <!-- <Navbar v-if="$route.name !== 'Login'" /> -->
    <Navbar />
    <router-view />
  </div>
</template>

  <!--
  Die Navbar ist in App.vue außerhalb von <router-view /> definiert. Das bedeutet:

  Sie wird immer angezeigt, unabhängig davon, welche Route aktiv ist.
  Wenn du möchtest, dass sie nur auf bestimmten Routen erscheint, kannst du v-if verwenden
  -->

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
