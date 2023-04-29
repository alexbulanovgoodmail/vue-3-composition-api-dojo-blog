<script setup>
import { computed } from 'vue'
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const snippet = computed(() => {
  return props.post.body.substring(0, 100) + '...'
})
</script>

<template>
  <div class="nes-container with-title">
    <h2 class="title">{{ post.title }}</h2>
    <div class="-mx-2 my-3">
      <span v-for="(tag, index) in post.tags" :key="index" class="mx-2 text-xs">#{{ tag }}</span>
    </div>
    <p>{{ snippet }}</p>
  </div>
</template>
