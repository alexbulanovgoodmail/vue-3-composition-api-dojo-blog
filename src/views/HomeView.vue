<script setup>
import { ref } from 'vue'
import PostList from '@/components/PostList.vue'

const posts = ref([])
const error = ref(null)

async function load(params) {
  try {
    const data = await fetch('http://localhost:3000/posts/')

    if (!data.ok) {
      throw Error('no data available')
    }
    posts.value = await data.json()
  } catch (e) {
    error.value = e.message
  }
}

load()
</script>

<template>
  <main>
    <div class="container">
      <h1 class="mb-4">Home View</h1>
      <div v-if="error" class="nes-container is-error with-title">
        <p class="title">Error</p>
        <p>{{ error }}</p>
      </div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>Loadind...</div>
    </div>
  </main>
</template>
