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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Multiselect from '@/components/Multiselect.vue';
import Switch from '@/components/Switch.vue';

@Options({
  components: {
    Input,
    Multiselect,
    Switch,
  } 
})
export default class NavBar extends Vue {
  private temp = '';

  mounted(): void {
    this.temp = 'foobar';
  }
}
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
