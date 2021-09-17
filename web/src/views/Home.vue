<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavBar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';

@Options({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {}
</script>
