<template>
  <div>
    <div class="organism-tab-wrapper">
      <div
        v-for="tab in tabs"
        :key="tab"
        v-bind="tabAttributes"
        :class="{ 'organism-tab--selected': tab == selectedTab }"
        @click=";(selectedTab = tab), $emit('on-change')"
        v-html="$t(tab)"
      />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  name: 'PTab',
  emits: ['on-change'],
  props: {
    size: {
      type: String,
      default: 'sm',
      validator: (val: string) => ['sm', 'md'].includes(val),
    },
  },

  setup: (props, { slots }) => {
    const tabs = ref((slots as any).default().map((tab: any) => tab.props?.title))
    const selectedTab = ref(tabs.value[0])
    provide('selectedTab', selectedTab)
    return { tabs, selectedTab }
  },

  computed: {
    tabAttributes(): { class: Record<string, boolean> } {
      return {
        class: { 'organism-tab': true, [`organism-tab--${this.size}`]: true },
      }
    },
  },
})
</script>
