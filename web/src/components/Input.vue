<template>
  <div class="__input_container">
    <div
        class="__label"
        :class="selected ? 'selected' : ''"
    >
      {{ label }}
    </div>
    <input
      v-model="value"
      class="__input"
      type="text"
      @focus="selected = true"
      @blur="handleBlur"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class Input extends Vue {
  @Prop({ default: '' }) initialValue!: string
  @Prop({ default: '' }) label!: string

  private value = ''
  private selected = false

  mounted(): void {
    this.selected = !!this.initialValue
    this.value = this.initialValue
  }

  handleBlur(): void {
    this.selected = !!this.value
  }
}
</script>

<style scoped lang="scss">
.__input_container {
  position: relative;

  .__label {
    position: absolute;
    font-size: 18px;

    &.selected {
      font-size: 12px;
      margin-top: -8px;
    }
  }

  .__input {
    font-size: 18px;

    width: 200px;
    height: 20px;

    //border: 2px;
    border-style: none none solid none;

    &:focus {
      outline: none;
    }
  }
}

.__label {
  transition: all .2s ease;
}

</style>