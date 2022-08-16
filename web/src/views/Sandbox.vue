<template>
  <div class="content">
    Sandbox
  </div>

  <Switch />

  <Multiselect />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Switch from '@/components/Switch.vue';
import Multiselect from '@/components/Multiselect.vue';

@Options({
  components: {
    Multiselect,
    Switch
  }
})
export default class NavBar extends Vue {}
</script>

<style scoped>
</style>
