<script setup>
import { defineEmits } from 'vue';

defineProps({
  id: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "dark",
  },
  inputClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
   modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const emitUpdate = (event) => {
  emit('update:modelValue', event.target.checked);
};
</script>
<template>
  <div class="form-check">
    <input class="form-check-input" 
    :class="`bg-${color} border-${color} ${inputClass}`" 
    type="checkbox" value="" :id="id"
    :checked="modelValue"
    @change="emitUpdate"
    />
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>
