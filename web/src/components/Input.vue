<template>
  <div class="__input_container">
    <div
        class="__label"
        :class="shrinkLabel ? 'shrinkLabel' : ''"
    >
      {{ label }}
    </div>
    <input
      class="__input"
      type="text"
      :value="value"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Options({})
export default class Input extends Vue {
  @Prop() value!: string
  @Prop({ default: '' }) label!: string

  private shrinkLabel = false;
  private isFocused = false;

  @Watch('value', { immediate: true })
  @Watch('isFocused')
  updateShrinkLabel(): void {
    this.shrinkLabel = !!this.value || this.isFocused;
  }
}
</script>

<style scoped lang="scss">
.__input_container {
  position: relative;

  .__label {
    position: absolute;
    font-size: 18px;

    &.shrinkLabel {
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