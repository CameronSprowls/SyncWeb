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

<script setup lang="ts">
import { ref, watch, withDefaults, defineProps, onMounted } from 'vue';

interface InputProps {
  value: string
  label?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  label: ''
})

const shrinkLabel = ref(false);
const isFocused = ref(false);

watch([() => props.value, isFocused], () => {
  shrinkLabel.value = !!props.value || isFocused.value;
}, { immediate: true })
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