<template>
  <div class="content">
    Settings

    <h1>Page Settings</h1>
    <div class="page-settings">
      <p>Theme</p>

      <Multiselect
        :values="themes()"
        @changedValue="switchTheme($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Multiselect from '../components/Multiselect.vue';

enum Themes {
  Light = "light-theme",
  Dark = "dark-theme",
  Blue = 'blue-theme',
}

const selectedTheme = Themes.Light

function switchTheme(theme: string): void {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = document.getElementById("root-app")!
  root.setAttribute("class", theme)
}

function themes(): string[] {
  return Object.values(Themes);
}
</script>

<style scoped>
.page-settings {
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 8px;
  flex-direction: column;
  text-align: start;
}
</style>
