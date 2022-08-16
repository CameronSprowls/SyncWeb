<template>
  <div class="content">
    <div class="home">
      Hello, would you like to destroy some evil today?
    </div>

    <button @click="doTheThing" >
      Do The Thing!
    </button>

    {{response}}

  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import test from '@/api/test';

export default class Home extends Vue {
  response = ''

  async doTheThing(): Promise<void> {
    await test.test().then((response) => {
      this.response = response
    })
  }
}
</script>
