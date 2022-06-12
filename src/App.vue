<template>
  <the-layout><router-view /></the-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheLayout from './layout/index.vue'

export default defineComponent({
  name: 'Thalex',
  components: { TheLayout },
})
</script>
