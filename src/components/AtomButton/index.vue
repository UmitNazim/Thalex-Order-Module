<template>
  <button
    v-bind="buttonAttributes"
    class="atom-button place-items-center"
    @click="$emit('on-click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (val: string) => ['button', 'submit'].includes(val),
    },
    size: {
      type: String,
      default: 'sm',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
    },
    theme: {
      type: String,
      default: 'success',
      validator: (val: string) => ['success', 'danger'].includes(val),
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonAttributes(): {
      class: Record<string, boolean>
      disabled: boolean
      type: string
    } {
      return {
        class: {
          [`atom-button--${this.theme}`]: true,
          [`atom-button--${this.size}`]: true,
          'atom-button--block': this.block,
        },
        disabled: this.disabled,
        type: this.type,
      }
    },
  },
})
</script>
