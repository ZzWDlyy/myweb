<template>
  <div class="cursor-pointer">
    <div class="card card-background">
      <div class="full-background" :style="{ backgroundImage: `url(${image})` }" loading="lazy"></div>
      <div class="card-body pt-7 text-center">
        <p class="text-white text-uppercase" >{{ label }}</p>
        <h3 class="text-white mb-0">{{ title }}</h3>
        <p class="text-white opacity-8">
          {{ description }}
        </p>
        <button type="button" class="btn btn-sm mt-3" :class="button.color" @click="handleButtonClick">
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  button: {
    type: Object,
    label: String,
    color: String,
    default: () => ({
      label: "Get started",
      color: "btn-white",
    }),
  },
});

const router = useRouter()

const handleButtonClick = () => {
  router.push('/introduce')
}
</script>
