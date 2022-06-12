<template>
  <the-header />
  <slot />
  <the-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './TheHeader/index.vue'
import TheFooter from './TheFooter/index.vue'

export default defineComponent({
  name: 'TheLayout',
  components: { TheHeader, TheFooter },
})
</script>
