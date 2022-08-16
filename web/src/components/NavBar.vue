<template>
  <div class="nav-bar">
    <router-link
      :to="{ name: PAGE_NAMES.HOME }"
      :class="{ exact: $route.name === PAGE_NAMES.HOME }"
    >
      <div class="nav-button inline-container">
        <HomeIcon />
        <p>Home</p>
      </div>
    </router-link>

    <router-link
      :to="{ name: PAGE_NAMES.USER }"
      :class="{ exact: $route.name === PAGE_NAMES.USER }"
    >
      <div class="nav-button inline-container">
        <UserIcon />
        <p>Sandbox</p>
      </div>
    </router-link>

    <router-link
      :to="{ name: PAGE_NAMES.SETTINGS }"
      :class="{ exact: $route.name === PAGE_NAMES.SETTINGS }"
    >
      <div class="nav-button inline-container">
        <SettingsIcon />
        <p>Settings</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SettingsIcon from '@/assets/img/settings-icon.svg';
import HomeIcon from '@/assets/img/home-icon.svg';
import UserIcon from '@/assets/img/user-icon.svg';
import { PAGE_NAMES } from '@/misc/constants';

@Options({
  components: {
    SettingsIcon,
    HomeIcon,
    UserIcon
  },
})
export default class NavBar extends Vue {
  PAGE_NAMES = PAGE_NAMES
}
</script>

<style scoped lang="scss">

.nav-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      :visited {
        text-decoration: none;
      }
    }
  }

  &.router-link-active.exact {
    background-color: blue;
  }
}
</style>
