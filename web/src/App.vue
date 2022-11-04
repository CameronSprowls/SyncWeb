<template>
  <div class="light-theme" id="root-app">
    <NavBar />
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

function isSignedIn(): boolean {
  return route.name !== 'Sign In'
}
</script>

<style lang="scss">
// Intentionally leaving off scoped so common is easier to user
@import "styles/common.scss";
@import "styles/_theme.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  //height: 100vh;
}
</style>
