<template>
  <keep-alive>
    <div v-if="title == selectedTab" class="organism-tab-panel"><slot /></div>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'PTabPanel',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup: () => ({ selectedTab: inject('selectedTab') }),
})
</script>
