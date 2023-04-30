<script setup>
import { RouterLink } from 'vue-router'
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
  <RouterLink
    :to="{
      name: 'DetailsView',
      params: {
        id: post.id
      }
    }"
    class="group hover:no-underline hover:text-color-17 transition"
  >
    <div class="nes-container with-title border-current transition">
      <h2 class="title">{{ post.title }}</h2>
      <div class="-mx-2 my-3">
        <span
          v-for="(tag, index) in post.tags"
          :key="index"
          class="mx-2 text-xs text-color-00 hover:text-color-17 transition"
          >#{{ tag }}</span
        >
      </div>
      <p>{{ snippet }}</p>
    </div>
  </RouterLink>
</template>
