<template>
  <div class="molecule-input" :class="{ 'molecule-input--disabled': disabled }">
    <div v-if="prepend" class="molecule-input__prepend" v-text="prepend" />
    <input
      v-model="value"
      :placeholder="placeholder"
      :type="type"
      :readonly="readonly"
      class="molecule-input__field"
      @input="$emit('on-input')"
    />
    <div v-if="append" class="molecule-input__append" v-text="append" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'MoleculeInput',
  emits: ['update:modelValue', 'on-input'],
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
      validator: (val: string) => ['text', 'password'].includes(val),
    },
    prepend: {
      type: String,
      default: null,
    },
    append: {
      type: String,
      default: null,
    },
  },

  setup: (props, { emit }) => ({
    value: computed({
      get: () => props.modelValue,
      set: (value: string | number) => emit('update:modelValue', value),
    }),
  }),
})
</script>
