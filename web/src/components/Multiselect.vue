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
      v-if="isFocused"
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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class Multiselect extends Vue {
  @Prop() values!: string[]
  @Prop( { default: null }) preselectedValue!: string|null

  private selectedValue = ''
  private focused = false

  mounted(): void {
    if (this.preselectedValue) {
      this.selectValue(this.preselectedValue)
    }
  }

  selectValue(value: string): void {
    this.selectedValue = value

    // TODO make this conditional based on if they want "single select" or not
    this.changeDisplay(false)

    this.$emit('changedValue', value)
  }

  changeDisplay(newDisplay: boolean): void {
    this.focused = newDisplay
  }

  get isFocused(): boolean {
    return this.focused
  }

  handleBlur(event: FocusEvent): void {
    // If the related target is null, we are targeting outside this component, so close it
    if (!event.relatedTarget) {
      this.changeDisplay(false)
    }
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