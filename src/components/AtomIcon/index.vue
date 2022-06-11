<template>
  <img @click="$emit('on-click')" v-bind="iconAttributes" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomImage',
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },

  computed: {
    iconAttributes(): Record<string, string | boolean | Record<string, string>> {
      return {
        src: require(`@/assets/icons/${this.icon}.svg`),
        ...(this.color && { style: { fill: `b-${this.color}` } }),
        width: this.width,
        height: this.height,
        alt: this.alt,
      }
    },
  },
})
</script>
