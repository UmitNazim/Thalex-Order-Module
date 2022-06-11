<template>
  <section v-bind="cardAttributes"><slot /></section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PCard',
  props: {
    color: {
      type: String,
      default: 'dark-jungle-green',
    },
    shaped: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cardAttributes(): { class: Record<string, boolean> } {
      return {
        class: {
          'organism-card': true,
          [`b-${this.color}`]: true,
          'organism-card--elevated': this.elevated,
          'organism-card--hover': this.hover,
          'organism-card--shaped': this.shaped,
        },
      }
    },
  },
})
</script>
