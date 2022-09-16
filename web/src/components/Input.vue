<template>
  <input
    v-model="value"
    class="__input"
    type="text"
  />
</template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  
  @Options({})
  export default class Input extends Vue {
   @Prop({ default: '' }) value!: string
  }
  </script>
  
  <style scoped>
    
  </style>