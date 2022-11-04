<template>
<!--  this is to search -->
  <div
      class="__multiselect"
  >
    <input
      :value="selectedValue"
      @focus="changeDisplay(true)"
      @blur="handleBlur($event)"
    />

    <div
      v-if="focused"
      class="__multiselect-dropdown-container"
      tabindex="0"
    >
      <div
          v-for="(option, key) in values"
          v-bind:key="key"
          class="__multiselect-option-list"
          tabindex="1"
      >
        <div
          class="__multiselect-option"
          :class="{ 'selected' : selectedValue === option }"
          :key="key"
          tabindex="2"
          @click="selectValue(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, defineProps } from 'vue';

interface MultiselectProps {
  values: string[]
  preselectedValue?: string
}

const props = defineProps<MultiselectProps>()
const emit = defineEmits(['changedValue'])

const selectedValue = ref('')
const focused = ref(false)

onMounted(() => {
  if (props.preselectedValue) {
    selectValue(props.preselectedValue)
  }
})

function selectValue(value: string): void {
  selectedValue.value = value

  // TODO make this conditional based on if they want "single select" or not
  changeDisplay(false)

  emit('changedValue', value)
}

function changeDisplay(newDisplay: boolean): void {
  focused.value = newDisplay
}

function handleBlur(event: FocusEvent): void {
  // If the related target is null, we are targeting outside this component, so close it
  if (!event.relatedTarget) {
    changeDisplay(false)
  }
}
</script>

<style scoped lang="scss">

// TODO make small medium large versions?

.__multiselect {
  position: relative;

  input {
    // TODO desperately needs styles - fix padding + margins
    width: 190px;
    height: 25px;

    //border: none;
    border-radius: 2px;
    padding: 0 5px;

    &:focus {
      border: none;
    }
  }

  .__multiselect-dropdown-container {
    position: absolute;

    .__multiselect-option-list {
      width: 200px;

      .__multiselect-option {
        display: flex;
        align-items: center;

        height: 40px;
        cursor: pointer;

        padding: 0 5px;
      }
    }
  }
}

</style>