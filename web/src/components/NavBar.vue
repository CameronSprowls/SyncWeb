<template>
  <div class="nav-bar">
    <router-link
      :to="{ name: PAGE_NAMES.HOME }"
      :class="{ exact: $route.name === PAGE_NAMES.HOME }"
    >
      <div>
        <HomeIcon />
        <p>Home</p>
      </div>
    </router-link>

    <router-link
      :to="{ name: PAGE_NAMES.USER }"
      :class="{ exact: $route.name === PAGE_NAMES.USER }"
    >
      <div>
        <UserIcon />
        <p>User</p>
      </div>
    </router-link>
    
    <router-link
      :to="{ name: PAGE_NAMES.SETTINGS }"
      :class="{ exact: $route.name === PAGE_NAMES.SETTINGS }"
    >
      <div>
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
  grid-template-columns: 1fr 1fr 1fr;

  &.router-link-active.exact {
    svg {
      fill: red;
    }
  }
}
</style>
