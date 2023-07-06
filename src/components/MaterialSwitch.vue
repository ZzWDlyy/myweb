<script setup>
import { defineEmits } from 'vue';

defineProps({
  id: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: "",
  },
});

const emitUpdate = (event) => {
  emits('update:checked', event.target.checked);
};

const emits = defineEmits(['update:checked']);
</script>

<template>
  <div class="form-check form-switch">
    <input 
    :id="id" 
    class="form-check-input" 
    type="checkbox" 
    :name="id" 
    :checked="checked" 
    @input="emitUpdate" />
    <label class="form-check-label d-block" :class="labelClass" :for="id">
      <slot />
    </label>
    <slot name="description" v-if="$slots.description" />
  </div>
</template>
