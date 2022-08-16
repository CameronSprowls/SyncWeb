<template>
  <div class="light-theme" id="root-app">
    <NavBar />
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import NavBar from '@/components/NavBar.vue'

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
  isSignedIn(): boolean {
    return this.$route.name !== 'Sign In'
  }
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
