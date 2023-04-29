<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from '@/components/SinglePost.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

//
onMounted(() => {
  console.log('[onMounted]')
})
onUnmounted(() => {
  console.log('[onUnmounted]')
})
onUpdated(() => {
  console.log('[onUpdated]')
})
</script>

<template>
  <div v-for="(post, index) in props.posts" :key="index" class="my-6">
    <SinglePost :post="post" />
  </div>
</template>
