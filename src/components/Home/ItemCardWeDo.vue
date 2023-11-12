<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="we-do">
    <div class="icons">
      <slot name="icon"></slot>
    </div>
    <div>
      <h2 class="we-do-title">{{ title }}</h2>
      <p class="we-do-description lh-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>
