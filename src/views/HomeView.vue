<script setup>
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'

const { posts, error, load } = getPosts()

load()
</script>

<template>
  <main>
    <div class="container">
      <h1 class="mb-4">Home View</h1>
      <div v-if="posts.length === 0 && error === null">Loadind...</div>
      <div v-if="error" class="nes-container is-error with-title">
        <p class="title">Error</p>
        <p>{{ error }}</p>
      </div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
    </div>
  </main>
</template>
