<template>
  <hr v-bind="dividerAttributes" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomDivider',
  props: {
    color: {
      type: String,
      default: 'gunmetal',
    },
    size: {
      type: String,
      default: 'sm',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
    },
  },

  computed: {
    dividerAttributes(): { class: Record<string, boolean> } {
      return {
        class: {
          'atom-divider': true,
          [`t-${this.color}`]: true,
          [`atom-divider__${this.size}`]: true,
        },
      }
    },
  },
})
</script>
