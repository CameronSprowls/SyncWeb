<template>
  <div class="content">
    <div class="sandbox-container">
      Sandbox
      <Switch />
      <Input
        v-model:value="temp"
        label="foo"
      />
      <Multiselect />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Input from '@/components/Input.vue';
import Multiselect from '@/components/Multiselect.vue';
import Switch from '@/components/Switch.vue';

const temp = ref('');

onMounted(() => {
  temp.value = 'foobar';
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  .sandbox-container {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    max-height: 100px;
    max-width: 150px;
  }
}

</style>
